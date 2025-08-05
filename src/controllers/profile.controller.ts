import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcryptjs';
import { AppError } from '../utils/app.error';
import crypto from 'crypto';

const prisma = new PrismaClient();

export class ProfileController {
	// Get user profile
	static async getProfile(req: Request, res: Response, next: NextFunction) {
		try {
			console.log('Profile request user data:', req.user);
			const userIdFromToken = req.user?.id;
			console.log(
				'User ID from token:',
				userIdFromToken,
				'type:',
				typeof userIdFromToken
			);

			// Handle both string and number user IDs
			const userId =
				typeof userIdFromToken === 'string'
					? parseInt(userIdFromToken)
					: userIdFromToken;
			console.log('Parsed user ID:', userId);

			if (!userId || isNaN(userId)) {
				throw new AppError('User not authenticated', 401);
			}

			const user = await prisma.users.findUnique({
				where: { id: userId },
				select: {
					id: true,
					name: true,
					email: true,
					role: true,
					referral_code: true,
					profile_picture: true,
					created_at: true,
					referred_by_id: true,
					// Include referral stats
					referred_users: {
						select: {
							id: true,
							name: true,
							email: true,
							created_at: true,
						},
					},
					// Include referral points
					referral_points: {
						where: {
							used: false,
							expires_at: {
								gte: new Date(),
							},
						},
						select: {
							points: true,
							earned_at: true,
							expires_at: true,
						},
					},
					// Include coupons
					coupons: {
						where: {
							is_used: false,
							expires_at: {
								gte: new Date(),
							},
						},
						select: {
							code: true,
							discount_percent: true,
							issued_at: true,
							expires_at: true,
							source: true,
						},
					},
				},
			});

			if (!user) {
				throw new AppError('User not found', 404);
			}

			// Calculate total available points
			const totalPoints = user.referral_points.reduce(
				(sum: number, point: any) => sum + point.points,
				0
			);

			res.json({
				success: true,
				profile: {
					...user,
					statistics: {
						totalReferrals: user.referred_users.length,
						totalPoints: totalPoints,
						activeCoupons: user.coupons.length,
					},
				},
			});
		} catch (error) {
			next(error);
		}
	}

	// Update user profile
	static async updateProfile(req: Request, res: Response, next: NextFunction) {
		try {
			const userId = parseInt(req.user?.id as string);
			if (!userId) {
				throw new AppError('User not authenticated', 401);
			}

			const { name, profile_picture } = req.body;

			// Validate inputs
			if (name && name.trim().length < 2) {
				throw new AppError('Name must be at least 2 characters long', 400);
			}

			const updateData: any = {};
			if (name) updateData.name = name.trim();
			if (profile_picture) updateData.profile_picture = profile_picture;

			const updatedUser = await prisma.users.update({
				where: { id: userId },
				data: updateData,
				select: {
					id: true,
					name: true,
					email: true,
					role: true,
					referral_code: true,
					profile_picture: true,
					updated_at: true,
				},
			});

			res.json({
				success: true,
				message: 'Profile updated successfully',
				user: updatedUser,
			});
		} catch (error) {
			next(error);
		}
	}

	// Change password
	static async changePassword(req: Request, res: Response, next: NextFunction) {
		try {
			const userId = parseInt(req.user?.id as string);
			if (!userId) {
				throw new AppError('User not authenticated', 401);
			}

			const { currentPassword, newPassword, confirmPassword } = req.body;

			// Validate inputs
			if (!currentPassword || !newPassword || !confirmPassword) {
				throw new AppError('All password fields are required', 400);
			}

			if (newPassword !== confirmPassword) {
				throw new AppError('New passwords do not match', 400);
			}

			if (newPassword.length < 6) {
				throw new AppError(
					'New password must be at least 6 characters long',
					400
				);
			}

			// Get current user
			const user = await prisma.users.findUnique({
				where: { id: userId },
				select: { password: true },
			});

			if (!user) {
				throw new AppError('User not found', 404);
			}

			// Verify current password
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
				data: { password: hashedNewPassword },
			});

			res.json({
				success: true,
				message: 'Password changed successfully',
			});
		} catch (error) {
			next(error);
		}
	}

	// Request password reset (for email-based reset)
	static async requestPasswordReset(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const { email } = req.body;

			if (!email) {
				throw new AppError('Email is required', 400);
			}

			const user = await prisma.users.findUnique({
				where: { email },
			});

			if (!user) {
				// Don't reveal if email exists or not for security
				res.json({
					success: true,
					message: 'If the email exists, a password reset link has been sent',
				});
				return;
			}

			// Generate reset token
			const resetToken = crypto.randomBytes(32).toString('hex');
			const resetTokenExpiry = new Date();
			resetTokenExpiry.setHours(resetTokenExpiry.getHours() + 1); // 1 hour expiry

			// Save reset token to database
			await prisma.password_resets.create({
				data: {
					user_id: user.id,
					token: resetToken,
					expires_at: resetTokenExpiry,
				},
			});

			// In a real application, you would send an email here
			// For now, we'll just return the token (remove this in production)
			res.json({
				success: true,
				message: 'Password reset token generated',
				// Remove this in production - only for testing
				resetToken: resetToken,
			});
		} catch (error) {
			next(error);
		}
	}

	// Reset password with token
	static async resetPassword(req: Request, res: Response, next: NextFunction) {
		try {
			const { token, newPassword, confirmPassword } = req.body;

			if (!token || !newPassword || !confirmPassword) {
				throw new AppError('Token and passwords are required', 400);
			}

			if (newPassword !== confirmPassword) {
				throw new AppError('Passwords do not match', 400);
			}

			if (newPassword.length < 6) {
				throw new AppError('Password must be at least 6 characters long', 400);
			}

			// Find valid reset token
			const resetRecord = await prisma.password_resets.findFirst({
				where: {
					token,
					expires_at: {
						gte: new Date(),
					},
				},
				include: {
					user: true,
				},
			});

			if (!resetRecord) {
				throw new AppError('Invalid or expired reset token', 400);
			}

			// Hash new password
			const hashedPassword = await bcrypt.hash(newPassword, 10);

			// Use transaction to update password and delete used token
			await prisma.$transaction(async (tx: any) => {
				// Update user password
				await tx.users.update({
					where: { id: resetRecord.user_id },
					data: { password: hashedPassword },
				});

				// Delete used reset token
				await tx.password_resets.delete({
					where: { id: resetRecord.id },
				});
			});

			res.json({
				success: true,
				message: 'Password reset successfully',
			});
		} catch (error) {
			next(error);
		}
	}

	// Delete account
	static async deleteAccount(req: Request, res: Response, next: NextFunction) {
		try {
			const userId = parseInt(req.user?.id as string);
			if (!userId) {
				throw new AppError('User not authenticated', 401);
			}

			const { password, confirmDelete } = req.body;

			if (!password || confirmDelete !== 'delete account') {
				throw new AppError('Password and confirmation text required', 400);
			}

			// Get user to verify password
			const user = await prisma.users.findUnique({
				where: { id: userId },
				select: { password: true },
			});

			if (!user) {
				throw new AppError('User not found', 404);
			}

			// Verify password
			const isPasswordValid = await bcrypt.compare(password, user.password);
			if (!isPasswordValid) {
				throw new AppError('Invalid password', 400);
			}

			// Delete user account (this will cascade delete related records)
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
}
