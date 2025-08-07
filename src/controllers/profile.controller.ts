import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/app.error';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export class ProfileController {
	// Get user profile with real data
	static async getProfile(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const userId = parseInt(req.user?.id as string);

			if (!userId) {
				throw new AppError('Unauthorized', 401);
			}

			// Fetch user with related data
			const user = await prisma.users.findUnique({
				where: { id: userId },
				include: {
					coupons: {
						where: {
							is_used: false,
							expires_at: {
								gt: new Date(),
							},
						},
					},
					referral_points_referral_points_user_idTousers: {
						where: {
							expires_at: {
								gt: new Date(),
							},
						},
					},
					other_users: {
						select: {
							id: true,
							name: true,
							email: true,
							created_at: true,
						},
					},
				},
			});

			if (!user) {
				throw new AppError('User not found', 404);
			}

			// Calculate statistics
			const totalReferrals = user.other_users.length;
			const totalPoints =
				user.referral_points_referral_points_user_idTousers.reduce(
					(sum: number, point: any) => sum + Number(point.points),
					0
				);
			const activeCoupons = user.coupons.length;

			// Format response
			const profile = {
				id: user.id,
				name: user.name || '',
				email: user.email,
				role: user.role,
				referral_code: user.referral_code,
				profile_picture: user.profile_picture || '',
				created_at: user.created_at.toISOString(),
				statistics: {
					totalReferrals,
					totalPoints,
					activeCoupons,
				},
				referred_users: user.other_users.map((referredUser: any) => ({
					id: referredUser.id,
					name: referredUser.name || '',
					email: referredUser.email,
					created_at: referredUser.created_at.toISOString(),
				})),
				referral_points:
					user.referral_points_referral_points_user_idTousers.map(
						(point: any) => ({
							points: Number(point.points),
							earned_at: point.earned_at.toISOString(),
							expires_at: point.expires_at.toISOString(),
						})
					),
				coupons: user.coupons.map((coupon: any) => ({
					code: coupon.code,
					discount_percent: coupon.discount_percent,
					issued_at: coupon.issued_at.toISOString(),
					expires_at: coupon.expires_at.toISOString(),
					source: coupon.source || 'referral',
				})),
			};

			res.json({
				success: true,
				profile,
			});
		} catch (error) {
			next(error);
		}
	}

	// Update profile with real functionality
	static async updateProfile(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const userId = parseInt(req.user?.id as string);
			const { name, profile_picture } = req.body;

			if (!userId) {
				throw new AppError('Unauthorized', 401);
			}

			// Validate input
			if (!name || name.trim().length === 0) {
				throw new AppError('Name is required', 400);
			}

			// Update user profile
			const updatedUser = await prisma.users.update({
				where: { id: userId },
				data: {
					name: name.trim(),
					profile_picture: profile_picture || null,
					updated_at: new Date(),
				},
				select: {
					id: true,
					name: true,
					email: true,
					profile_picture: true,
					updated_at: true,
				},
			});

			res.json({
				success: true,
				message: 'Profile updated successfully',
				profile: updatedUser,
			});
		} catch (error) {
			next(error);
		}
	}

	// Change password with real functionality
	static async changePassword(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const userId = parseInt(req.user?.id as string);
			const { currentPassword, newPassword } = req.body;

			if (!userId) {
				throw new AppError('Unauthorized', 401);
			}

			// Validate input
			if (!currentPassword || !newPassword) {
				throw new AppError(
					'Current password and new password are required',
					400
				);
			}

			if (newPassword.length < 6) {
				throw new AppError(
					'New password must be at least 6 characters long',
					400
				);
			}

			// Get user with current password
			const user = await prisma.users.findUnique({
				where: { id: userId },
				select: {
					id: true,
					password: true,
				},
			});

			if (!user) {
				throw new AppError('User not found', 404);
			}

			// Verify current password
			const bcrypt = require('bcrypt');
			const isCurrentPasswordValid = await bcrypt.compare(
				currentPassword,
				user.password
			);

			if (!isCurrentPasswordValid) {
				throw new AppError('Current password is incorrect', 400);
			}

			// Hash new password
			const hashedNewPassword = await bcrypt.hash(newPassword, 10);

			// Update password
			await prisma.users.update({
				where: { id: userId },
				data: {
					password: hashedNewPassword,
					updated_at: new Date(),
				},
			});

			res.json({
				success: true,
				message: 'Password changed successfully',
			});
		} catch (error) {
			next(error);
		}
	}

	// Request password reset - simplified
	static async requestPasswordReset(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const { email } = req.body;
			if (!email) {
				res.status(400).json({ success: false, message: 'Email is required' });
				return;
			}

			// Find user by email
			const user = await prisma.users.findUnique({ where: { email } });
			if (!user) {
				res.status(404).json({ success: false, message: 'User not found' });
				return;
			}

			// Generate JWT token for password reset (expires in 1 hour)
			const jwt = require('jsonwebtoken');
			const secret = process.env.JWT_SECRET || 'changeme';
			const token = jwt.sign({ userId: user.id, email: user.email }, secret, {
				expiresIn: '1h',
			});

			// Construct reset link to frontend route
			const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
			const resetLink = `${frontendUrl}/reset-password?token=${token}`;

			// Send email using nodemailer
			const { sendEmail } = require('../utils/email.service');
			await sendEmail({
				to: user.email,
				subject: 'Password Reset Request',
				html: `<p>Hello ${user.name || user.email},</p>
					<p>You requested a password reset. Click the link below to reset your password:</p>
					<p><a href="${resetLink}">${resetLink}</a></p>
					<p>This link will expire in 1 hour.</p>
					<p>If you did not request this, please ignore this email.</p>`,
			});

			res.json({
				success: true,
				message: 'Password reset email sent. Please check your inbox.',
			});
			return;
		} catch (err) {
			console.error('Password reset error:', err);
			res.status(500).json({
				success: false,
				message: 'Failed to send password reset email',
			});
			return;
		}
	}

	// Reset password - simplified
	static async resetPassword(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const { token, newPassword } = req.body;
			if (!token || !newPassword) {
				res
					.status(400)
					.json({
						success: false,
						message: 'Token and new password are required.',
					});
				return;
			}

			// Verify JWT token
			const jwt = require('jsonwebtoken');
			let payload;
			try {
				payload = jwt.verify(token, process.env.JWT_SECRET || 'changeme');
			} catch (err) {
				res
					.status(400)
					.json({ success: false, message: 'Invalid or expired token.' });
				return;
			}

			// Find user by ID from token
			const user = await prisma.users.findUnique({
				where: { id: payload.userId },
			});
			if (!user) {
				res.status(404).json({ success: false, message: 'User not found.' });
				return;
			}

			// Hash new password
			const bcrypt = require('bcrypt');
			const hashedPassword = await bcrypt.hash(newPassword, 10);

			// Update password
			await prisma.users.update({
				where: { id: user.id },
				data: { password: hashedPassword, updated_at: new Date() },
			});

			res.json({
				success: true,
				message: 'Password has been reset successfully.',
			});
			return;
		} catch (error) {
			console.error('Password reset error:', error);
			res
				.status(500)
				.json({ success: false, message: 'Failed to reset password.' });
			return;
		}
	}

	// Delete account with real functionality
	static async deleteAccount(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const userId = parseInt(req.user?.id as string);
			const { password, confirmationText } = req.body;

			if (!userId) {
				throw new AppError('Unauthorized', 401);
			}

			// Validate input
			if (!password || !confirmationText) {
				throw new AppError('Password and confirmation text are required', 400);
			}

			if (confirmationText !== 'DELETE') {
				throw new AppError('Confirmation text must be "DELETE"', 400);
			}

			// Get user with password
			const user = await prisma.users.findUnique({
				where: { id: userId },
				select: {
					id: true,
					password: true,
					email: true,
				},
			});

			if (!user) {
				throw new AppError('User not found', 404);
			}

			// Verify password
			const bcrypt = require('bcrypt');
			const isPasswordValid = await bcrypt.compare(password, user.password);

			if (!isPasswordValid) {
				throw new AppError('Password is incorrect', 400);
			}

			// Delete user and related data (Prisma will handle cascading deletes based on schema)
			await prisma.users.delete({
				where: { id: userId },
			});

			res.json({
				success: true,
				message: 'Account deleted successfully',
			});
		} catch (error) {
			next(error);
		}
	}

	// Get organizer profile with events, ratings, and reviews
	static async getOrganizerProfile(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const organizerId = parseInt(req.params.organizerId);

			if (!organizerId || isNaN(organizerId)) {
				throw new AppError('Invalid organizer ID', 400);
			}
		// Fetch organizer user
		const organizer = await prisma.users.findUnique({
			where: {
				id: organizerId,
				role: 'organizer',
			},
				select: {
					id: true,
					name: true,
					email: true,
					profile_picture: true,
					created_at: true,
				},
			});

			if (!organizer) {
				throw new AppError('Organizer not found', 404);
			}

			// Get organizer's events with review counts and ratings
			const events = await prisma.events.findMany({
				where: { organizer_id: organizerId },
				include: {
					reviews: {
						select: {
							id: true,
							rating: true,
							comment: true,
							created_at: true,
							users: {
								select: {
									id: true,
									name: true,
								},
							},
						},
						orderBy: {
							created_at: 'desc',
						},
					},
					_count: {
						select: {
							reviews: true,
							bookings: {
								where: {
									status: 'CONFIRMED',
								},
							},
						},
					},
				},
				orderBy: {
					date: 'desc',
				},
			});

			// Calculate overall statistics
			let totalReviews = 0;
			let totalRating = 0;
			let totalEvents = events.length;
			let totalAttendees = 0;
			const ratingDistribution = [0, 0, 0, 0, 0]; // Index 0 = 1 star, Index 4 = 5 stars

			events.forEach((event) => {
				totalAttendees += event._count.bookings;
				event.reviews.forEach((review) => {
					totalReviews++;
					totalRating += review.rating;
					ratingDistribution[review.rating - 1]++;
				});
			});

			const averageRating = totalReviews > 0 ? totalRating / totalReviews : 0;

			// Get recent reviews across all events
			const recentReviews = await prisma.reviews.findMany({
				where: {
					events: {
						organizer_id: organizerId,
					},
				},
				include: {
					users: {
						select: {
							id: true,
							name: true,
						},
					},
					events: {
						select: {
							id: true,
							title: true,
						},
					},
				},
				orderBy: {
					created_at: 'desc',
				},
				take: 10,
			});

			// Format events data
			const formattedEvents = events.map((event) => ({
				id: event.id,
				title: event.title,
				description: event.description,
				date: event.date,
				location: event.location,
				price: event.price,
				currency: event.currency,
				category: event.category,
				image: event.image,
				total_seats: event.total_seats,
				available_seats: event.available_seats,
				review_count: event._count.reviews,
				attendee_count: event._count.bookings,
				average_rating:
					event.reviews.length > 0
						? event.reviews.reduce((sum, review) => sum + review.rating, 0) /
						  event.reviews.length
						: 0,
			}));

			const profile = {
				organizer: {
					id: organizer.id,
					name: organizer.name || 'Event Organizer',
					email: organizer.email,
					profile_picture: organizer.profile_picture,
					member_since: organizer.created_at.toISOString(),
				},
				statistics: {
					total_events: totalEvents,
					total_reviews: totalReviews,
					average_rating: averageRating,
					total_attendees: totalAttendees,
					rating_distribution: ratingDistribution,
				},
				events: formattedEvents,
				recent_reviews: recentReviews.map((review) => ({
					id: review.id,
					rating: review.rating,
					comment: review.comment,
					created_at: review.created_at.toISOString(),
					user: {
						id: review.users.id,
						name: review.users.name || 'Anonymous',
					},
					event: {
						id: review.events.id,
						title: review.events.title,
					},
				})),
			};

			res.json({
				success: true,
				data: profile,
			});
		} catch (error) {
			next(error);
		}
	}

	// Get list of organizers with basic info and ratings
	static async getOrganizers(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const page = parseInt(req.query.page as string) || 1;
			const limit = parseInt(req.query.limit as string) || 10;
			const search = req.query.search as string || '';
			const offset = (page - 1) * limit;
		// Build where clause for search
		const whereClause: any = {
			role: 'organizer',
		};

			if (search) {
				whereClause.OR = [
					{
						name: {
							contains: search,
							mode: 'insensitive',
						},
					},
					{
						email: {
							contains: search,
							mode: 'insensitive',
						},
					},
				];
			}

			// Get organizers with event and review statistics
			const organizers = await prisma.users.findMany({
				where: whereClause,
				select: {
					id: true,
					name: true,
					email: true,
					profile_picture: true,
					created_at: true,
					events: {
						select: {
							id: true,
							title: true,
							_count: {
								select: {
									reviews: true,
									bookings: {
										where: {
											status: 'CONFIRMED',
										},
									},
								},
							},
							reviews: {
								select: {
									rating: true,
								},
							},
						},
					},
				},
				skip: offset,
				take: limit,
				orderBy: {
					created_at: 'desc',
				},
			});

			// Calculate statistics for each organizer
			const organizersWithStats = organizers.map((organizer) => {
				let totalReviews = 0;
				let totalRating = 0;
				let totalEvents = organizer.events.length;
				let totalAttendees = 0;

				organizer.events.forEach((event) => {
					totalAttendees += event._count.bookings;
					totalReviews += event._count.reviews;
					event.reviews.forEach((review) => {
						totalRating += review.rating;
					});
				});

				const averageRating = totalReviews > 0 ? totalRating / totalReviews : 0;

				return {
					id: organizer.id,
					name: organizer.name || 'Event Organizer',
					email: organizer.email,
					profile_picture: organizer.profile_picture,
					member_since: organizer.created_at.toISOString(),
					statistics: {
						total_events: totalEvents,
						total_reviews: totalReviews,
						average_rating: averageRating,
						total_attendees: totalAttendees,
					},
				};
			});

			// Get total count for pagination
			const totalCount = await prisma.users.count({
				where: whereClause,
			});

			res.json({
				success: true,
				data: {
					organizers: organizersWithStats,
					pagination: {
						page,
						limit,
						total: totalCount,
						totalPages: Math.ceil(totalCount / limit),
					},
				},
			});
		} catch (error) {
			next(error);
		}
	}

	// ...existing methods...
}
