import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import { TransactionService } from '../services/transaction.service';
import multer from 'multer';
import path from 'path';

const prisma = new PrismaClient();

interface AuthenticatedUser {
	id: string;
	email: string;
	name?: string;
	role: string;
}

interface AuthenticatedRequest extends Request {
	user?: AuthenticatedUser;
}

// Configure multer for payment proof uploads
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/payment-proofs/');
	},
	filename: (req, file, cb) => {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, `payment-proof-${uniqueSuffix}${path.extname(file.originalname)}`);
	},
});

const upload = multer({
	storage,
	limits: {
		fileSize: 5 * 1024 * 1024, // 5MB limit
	},
	fileFilter: (req, file, cb) => {
		const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
		if (allowedTypes.includes(file.mimetype)) {
			cb(null, true);
		} else {
			cb(new Error('Only JPEG, PNG, and JPG files are allowed'));
		}
	},
});

export const uploadPaymentProof = upload.single('payment_proof');

/**
 * Create a new booking with enhanced transaction system
 */
export const createBooking = async (
	req: AuthenticatedRequest,
	res: Response
): Promise<void> => {
	try {
		const { event_id, quantity, use_points = 0, coupon_code } = req.body;

		if (!req.user) {
			res.status(401).json({ message: 'Authentication required' });
			return;
		}

		const userId = parseInt(req.user.id);

		// Validate input
		if (!event_id || !quantity || quantity <= 0) {
			res.status(400).json({
				message: 'Event ID and valid quantity are required',
			});
			return;
		}

		// Get event details
		const event = await prisma.events.findUnique({
			where: { id: parseInt(event_id) },
			include: {
				users: {
					select: {
						id: true,
						name: true,
						email: true,
					},
				},
			},
		});

		if (!event) {
			res.status(404).json({ message: 'Event not found' });
			return;
		}

		// Check if event is in the future
		const eventDateTime = new Date(
			`${event.date.toISOString().split('T')[0]}T${event.time}`
		);
		if (eventDateTime < new Date()) {
			res.status(400).json({
				message: 'Cannot book tickets for past events',
			});
			return;
		}

		// Check seat availability
		if (event.available_seats < quantity) {
			res.status(400).json({
				message: `Only ${event.available_seats} seats available`,
			});
			return;
		}

		// Calculate pricing
		const originalPrice = parseFloat(event.price.toString()) * quantity;
		let finalPrice = originalPrice;
		let pointsUsed = 0;
		let couponDiscount = 0;

		// Handle points usage
		if (use_points > 0) {
			const userPoints =
				await TransactionService.getUserAvailablePoints(userId);

			if (userPoints < use_points) {
				res.status(400).json({
					message: `Insufficient points. Available: ${userPoints}`,
				});
				return;
			}

			const priceCalculation = TransactionService.calculatePriceWithPoints(
				originalPrice,
				use_points
			);

			finalPrice = priceCalculation.finalPrice;
			pointsUsed = Math.min(use_points, priceCalculation.maxPointsUsable);

			// Note: Point deduction will be handled in the transaction service once schema is updated
		}

		// Handle coupon usage
		if (coupon_code) {
			const coupon = await prisma.coupons.findFirst({
				where: {
					code: coupon_code,
					user_id: userId,
					is_used: false,
					expires_at: {
						gt: new Date(),
					},
				},
			});

			if (coupon) {
				couponDiscount = (finalPrice * coupon.discount_percent) / 100;
				finalPrice = finalPrice - couponDiscount;

				// Mark coupon as used
				await prisma.coupons.update({
					where: { id: coupon.id },
					data: { is_used: true },
				});
			}
		}

		// Create booking using transaction service
		const booking = await TransactionService.createBooking({
			userId,
			eventId: parseInt(event_id),
			quantity,
			totalPrice: finalPrice,
			pointsUsed,
			couponCode: coupon_code,
			currency: event.currency,
		});

		res.status(201).json({
			message:
				'Booking created successfully. Please upload payment proof within 2 hours.',
			booking: {
				id: booking.id,
				event_title: event.title,
				quantity,
				total_price: finalPrice,
				original_price: originalPrice,
				points_used: pointsUsed,
				coupon_discount: couponDiscount,
				currency: event.currency,
				status: booking.status,
				payment_deadline: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
			},
		});
	} catch (error) {
		console.error('Error creating booking:', error);
		res.status(500).json({
			message: 'Failed to create booking',
			error: error instanceof Error ? error.message : 'Unknown error',
		});
	}
};

/**
 * Upload payment proof for a booking
 */
export const submitPaymentProof = async (
	req: AuthenticatedRequest,
	res: Response
): Promise<void> => {
	try {
		const { booking_id } = req.params;
		const userId = parseInt(req.user?.id || '0');

		if (!req.file) {
			res.status(400).json({ message: 'Payment proof image is required' });
			return;
		}

		const paymentProofUrl = `/uploads/payment-proofs/${req.file.filename}`;

		// Update booking using transaction service
		const updatedBooking = await TransactionService.uploadPaymentProof(
			parseInt(booking_id),
			paymentProofUrl,
			userId
		);

		res.json({
			message:
				'Payment proof uploaded successfully. Waiting for admin confirmation.',
			booking: {
				id: updatedBooking.id,
				status: updatedBooking.status,
				payment_proof: paymentProofUrl,
			},
		});
	} catch (error) {
		console.error('Error uploading payment proof:', error);
		res.status(500).json({
			message: 'Failed to upload payment proof',
			error: error instanceof Error ? error.message : 'Unknown error',
		});
	}
};

/**
 * Admin accepts payment proof
 */
export const acceptPayment = async (
	req: AuthenticatedRequest,
	res: Response
): Promise<void> => {
	try {
		const { booking_id } = req.params;
		const adminId = parseInt(req.user?.id || '0');

		if (req.user?.role !== 'organizer') {
			res.status(403).json({ message: 'Admin access required' });
			return;
		}

		const updatedBooking = await TransactionService.acceptPayment(
			parseInt(booking_id),
			adminId
		);

		res.json({
			message: 'Payment accepted successfully',
			booking: {
				id: updatedBooking.id,
				status: updatedBooking.status,
			},
		});
	} catch (error) {
		console.error('Error accepting payment:', error);
		res.status(500).json({
			message: 'Failed to accept payment',
			error: error instanceof Error ? error.message : 'Unknown error',
		});
	}
};

/**
 * Admin rejects payment proof
 */
export const rejectPayment = async (
	req: AuthenticatedRequest,
	res: Response
): Promise<void> => {
	try {
		const { booking_id } = req.params;
		const { reason } = req.body;
		const adminId = parseInt(req.user?.id || '0');

		if (req.user?.role !== 'organizer') {
			res.status(403).json({ message: 'Admin access required' });
			return;
		}

		if (!reason) {
			res.status(400).json({ message: 'Rejection reason is required' });
			return;
		}

		await TransactionService.rejectPayment(
			parseInt(booking_id),
			adminId,
			reason
		);

		res.json({
			message: 'Payment rejected successfully',
		});
	} catch (error) {
		console.error('Error rejecting payment:', error);
		res.status(500).json({
			message: 'Failed to reject payment',
			error: error instanceof Error ? error.message : 'Unknown error',
		});
	}
};

/**
 * User cancels their booking
 */
export const cancelBooking = async (
	req: AuthenticatedRequest,
	res: Response
): Promise<void> => {
	try {
		const { booking_id } = req.params;
		const userId = parseInt(req.user?.id || '0');

		// Verify user owns the booking
		const booking = await prisma.bookings.findFirst({
			where: {
				id: parseInt(booking_id),
				user_id: userId,
			},
		});

		if (!booking) {
			res.status(404).json({ message: 'Booking not found' });
			return;
		}

		await TransactionService.cancelTransaction(
			parseInt(booking_id),
			'Canceled by user',
			userId
		);

		res.json({
			message: 'Booking canceled successfully',
		});
	} catch (error) {
		console.error('Error canceling booking:', error);
		res.status(500).json({
			message: 'Failed to cancel booking',
			error: error instanceof Error ? error.message : 'Unknown error',
		});
	}
};

/**
 * Get user's bookings with enhanced status information
 */
export const getUserBookings = async (
	req: AuthenticatedRequest,
	res: Response
): Promise<void> => {
	try {
		const userId = parseInt(req.user?.id || '0');
		const { status, page = 1, limit = 10 } = req.query;

		const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

		const where: any = { user_id: userId };
		if (status) {
			where.status = status;
		}

		const bookings = await prisma.bookings.findMany({
			where,
			include: {
				events: {
					select: {
						id: true,
						title: true,
						date: true,
						time: true,
						location: true,
						image: true,
					},
				},
				payments: {
					select: {
						id: true,
						status: true,
						payment_proof: true,
						payment_date: true,
					},
				},
			},
			orderBy: { booking_date: 'desc' },
			skip,
			take: parseInt(limit as string),
		});

		const total = await prisma.bookings.count({ where });

		// Add countdown information for pending payments
		const enhancedBookings = bookings.map((booking) => {
			let timeRemaining = null;

			if (booking.status === 'waiting_for_payment') {
				const deadline = new Date(
					booking.booking_date.getTime() + 2 * 60 * 60 * 1000
				);
				const now = new Date();
				const remaining = deadline.getTime() - now.getTime();

				if (remaining > 0) {
					const hours = Math.floor(remaining / (1000 * 60 * 60));
					const minutes = Math.floor(
						(remaining % (1000 * 60 * 60)) / (1000 * 60)
					);
					timeRemaining = { hours, minutes, deadline };
				}
			}

			return {
				...booking,
				time_remaining: timeRemaining,
			};
		});

		res.json({
			bookings: enhancedBookings,
			pagination: {
				page: parseInt(page as string),
				limit: parseInt(limit as string),
				total,
				totalPages: Math.ceil(total / parseInt(limit as string)),
			},
		});
	} catch (error) {
		console.error('Error fetching user bookings:', error);
		res.status(500).json({
			message: 'Failed to fetch bookings',
			error: error instanceof Error ? error.message : 'Unknown error',
		});
	}
};

/**
 * Get bookings for admin review
 */
export const getBookingsForReview = async (
	req: AuthenticatedRequest,
	res: Response
): Promise<void> => {
	try {
		if (req.user?.role !== 'organizer') {
			res.status(403).json({ message: 'Admin access required' });
			return;
		}

		const {
			status = 'waiting_for_admin_confirmation',
			page = 1,
			limit = 10,
		} = req.query;
		const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

		const bookings = await prisma.bookings.findMany({
			where: { status: status as string },
			include: {
				users: {
					select: {
						id: true,
						name: true,
						email: true,
					},
				},
				events: {
					select: {
						id: true,
						title: true,
						date: true,
						time: true,
						organizer_id: true,
					},
				},
				payments: {
					select: {
						id: true,
						payment_proof: true,
						payment_date: true,
						status: true,
					},
				},
			},
			orderBy: { booking_date: 'asc' }, // Oldest first for review
			skip,
			take: parseInt(limit as string),
		});

		const total = await prisma.bookings.count({
			where: { status: status as string },
		});

		// Add deadline information
		const enhancedBookings = bookings.map((booking) => {
			let deadlineRemaining = null;

			if (booking.status === 'waiting_for_admin_confirmation') {
				const deadline = new Date(
					booking.booking_date.getTime() + 3 * 24 * 60 * 60 * 1000
				);
				const now = new Date();
				const remaining = deadline.getTime() - now.getTime();

				if (remaining > 0) {
					const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
					const hours = Math.floor(
						(remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
					);
					deadlineRemaining = { days, hours, deadline };
				}
			}

			return {
				...booking,
				deadline_remaining: deadlineRemaining,
			};
		});

		res.json({
			bookings: enhancedBookings,
			pagination: {
				page: parseInt(page as string),
				limit: parseInt(limit as string),
				total,
				totalPages: Math.ceil(total / parseInt(limit as string)),
			},
		});
	} catch (error) {
		console.error('Error fetching bookings for review:', error);
		res.status(500).json({
			message: 'Failed to fetch bookings for review',
			error: error instanceof Error ? error.message : 'Unknown error',
		});
	}
};

/**
 * Get user's available points
 */
export const getUserPoints = async (
	req: AuthenticatedRequest,
	res: Response
): Promise<void> => {
	try {
		const userId = parseInt(req.user?.id || '0');

		const availablePoints =
			await TransactionService.getUserAvailablePoints(userId);

		// Get point history (simplified)
		const pointHistory = await prisma.referral_points.findMany({
			where: { user_id: userId },
			orderBy: { earned_at: 'desc' },
			take: 10,
		});

		res.json({
			available_points: availablePoints,
			point_history: pointHistory,
		});
	} catch (error) {
		console.error('Error fetching user points:', error);
		res.status(500).json({
			message: 'Failed to fetch user points',
			error: error instanceof Error ? error.message : 'Unknown error',
		});
	}
};

/**
 * Calculate price preview with points
 */
export const calculatePricePreview = async (
	req: AuthenticatedRequest,
	res: Response
): Promise<void> => {
	try {
		const { event_id, quantity, use_points = 0, coupon_code } = req.body;
		const userId = parseInt(req.user?.id || '0');

		// Get event price
		const event = await prisma.events.findUnique({
			where: { id: parseInt(event_id) },
			select: { price: true, currency: true },
		});

		if (!event) {
			res.status(404).json({ message: 'Event not found' });
			return;
		}

		const originalPrice = parseFloat(event.price.toString()) * quantity;
		let calculation = TransactionService.calculatePriceWithPoints(
			originalPrice,
			use_points
		);

		// Check if user has enough points
		const userPoints = await TransactionService.getUserAvailablePoints(userId);
		const canUsePoints = userPoints >= use_points;

		// Check coupon if provided
		let couponDiscount = 0;
		let couponValid = false;

		if (coupon_code) {
			const coupon = await prisma.coupons.findFirst({
				where: {
					code: coupon_code,
					user_id: userId,
					is_used: false,
					expires_at: { gt: new Date() },
				},
			});

			if (coupon) {
				couponValid = true;
				couponDiscount =
					(calculation.finalPrice * coupon.discount_percent) / 100;
				calculation.finalPrice -= couponDiscount;
			}
		}

		res.json({
			original_price: originalPrice,
			points_discount: calculation.pointsDiscount,
			coupon_discount: couponDiscount,
			final_price: calculation.finalPrice,
			currency: event.currency,
			can_use_points: canUsePoints,
			max_points_usable: calculation.maxPointsUsable,
			user_available_points: userPoints,
			coupon_valid: couponValid,
		});
	} catch (error) {
		console.error('Error calculating price preview:', error);
		res.status(500).json({
			message: 'Failed to calculate price preview',
			error: error instanceof Error ? error.message : 'Unknown error',
		});
	}
};

/**
 * Check and process expired transactions (should be called by cron job)
 */
export const processExpiredTransactions = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const result = await TransactionService.checkExpiredTransactions();

		res.json({
			message: 'Expired transactions processed',
			expired_payments: result.expiredPayments,
			expired_admin_reviews: result.expiredAdminReviews,
		});
	} catch (error) {
		console.error('Error processing expired transactions:', error);
		res.status(500).json({
			message: 'Failed to process expired transactions',
			error: error instanceof Error ? error.message : 'Unknown error',
		});
	}
};
