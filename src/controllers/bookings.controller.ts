import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import * as emailService from '../utils/email.service';

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

export const createBooking = async (
	req: AuthenticatedRequest,
	res: Response
): Promise<void> => {
	try {
		const { event_id, quantity, use_points, coupon_code } = req.body;

		// Validate user is authenticated
		if (!req.user) {
			res.status(401).json({
				message: 'Authentication required',
			});
			return;
		}

		const user = req.user;

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
			res.status(404).json({
				message: 'Event not found',
			});
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

		// Calculate base total price
		let totalPrice = parseFloat(event.price.toString()) * quantity;
		let pointsUsed = 0;
		let couponUsed = null;
		let discountAmount = 0;

		// Handle points usage
		if (use_points && use_points > 0) {
			const userPoints = await prisma.referral_points.aggregate({
				where: {
					user_id: parseInt(user.id),
					used: false,
					expires_at: {
						gt: new Date(),
					},
				},
				_sum: {
					points: true,
				},
			});

			const availablePoints = userPoints._sum.points || 0;
			const pointsToUse = Math.min(use_points, availablePoints);
			const pointsDiscount = pointsToUse; // 1 point = 1 IDR

			if (pointsToUse > 0) {
				pointsUsed = pointsToUse;
				discountAmount += pointsDiscount;
				totalPrice = Math.max(0, totalPrice - pointsDiscount);
			}
		}

		// Handle coupon usage
		if (coupon_code) {
			const coupon = await prisma.coupons.findFirst({
				where: {
					code: coupon_code,
					user_id: parseInt(user.id),
					is_used: false,
					expires_at: {
						gt: new Date(),
					},
				},
			});

			if (coupon) {
				couponUsed = coupon;
				const couponDiscount = (totalPrice * coupon.discount_percent) / 100;
				discountAmount += couponDiscount;
				totalPrice = Math.max(0, totalPrice - couponDiscount);
			}
		}

		// Start transaction
		const result = await prisma.$transaction(async (tx) => {
			// Reserve seats
			await tx.events.update({
				where: { id: parseInt(event_id) },
				data: {
					available_seats: {
						decrement: quantity,
					},
				},
			});

			// Create booking
			const booking = await tx.bookings.create({
				data: {
					user_id: parseInt(user.id),
					event_id: parseInt(event_id),
					quantity,
					total_price: totalPrice,
					booking_date: new Date(),
					status: 'pending', // pending, confirmed, cancelled
				},
			});

			// Create payment record
			const payment = await tx.payments.create({
				data: {
					booking_id: booking.id,
					amount: totalPrice,
					payment_method: 'bank_transfer', // Default to bank transfer
					payment_date: new Date(),
					status: 'pending', // pending, accepted, rejected
					updated_at: new Date(),
				},
			});

			// Mark points as used if any were used
			if (pointsUsed > 0) {
				const pointsToMark = await tx.referral_points.findMany({
					where: {
						user_id: parseInt(user.id),
						used: false,
						expires_at: {
							gt: new Date(),
						},
					},
					orderBy: {
						expires_at: 'asc',
					},
				});

				let remainingPoints = pointsUsed;
				for (const point of pointsToMark) {
					if (remainingPoints <= 0) break;

					const pointsToUse = Math.min(remainingPoints, point.points);
					await tx.referral_points.update({
						where: { id: point.id },
						data: { used: true },
					});
					remainingPoints -= pointsToUse;
				}
			}

			// Mark coupon as used if any was used
			if (couponUsed) {
				await tx.coupons.update({
					where: { id: couponUsed.id },
					data: { is_used: true },
				});
			}

			return { booking, payment };
		});

		// Send email notifications
		try {
			// Email to customer
			await emailService.sendBookingConfirmationEmail(
				user.email,
				user.name || 'Customer',
				event,
				result.booking,
				pointsUsed,
				couponUsed?.code || null
			);

			// Email to organizer
			await emailService.sendOrganizerNotificationEmail(
				event.users.email,
				event.users.name || 'Organizer',
				event,
				user.name || user.email,
				result.booking
			);
		} catch (emailError) {
			console.error('Failed to send emails:', emailError);
			// Don't fail the booking if email fails
		}

		res.status(201).json({
			message: 'Booking created successfully',
			booking: {
				id: result.booking.id,
				event_id: result.booking.event_id,
				quantity: result.booking.quantity,
				total_price: result.booking.total_price,
				status: result.booking.status,
				payment_id: result.payment.id,
				points_used: pointsUsed,
				coupon_used: couponUsed?.code || null,
				discount_amount: discountAmount,
			},
		});
	} catch (error) {
		console.error('Error creating booking:', error);
		res.status(500).json({
			message: 'Internal server error',
			error: process.env.NODE_ENV === 'development' ? error : undefined,
		});
	}
};

export const getUserBookings = async (
	req: AuthenticatedRequest,
	res: Response
): Promise<void> => {
	try {
		if (!req.user) {
			res.status(401).json({
				message: 'Authentication required',
			});
			return;
		}

		const bookings = await prisma.bookings.findMany({
			where: {
				user_id: parseInt(req.user.id),
			},
			include: {
				events: {
					select: {
						id: true,
						title: true,
						date: true,
						time: true,
						location: true,
						price: true,
						image: true,
						category: true,
					},
				},
				payments: {
					select: {
						id: true,
						amount: true,
						payment_method: true,
						payment_date: true,
						status: true,
						payment_proof: true,
						created_at: true,
						updated_at: true,
					},
				},
			},
			orderBy: {
				booking_date: 'desc',
			},
		});

		res.json({
			bookings,
		});
	} catch (error) {
		console.error('Error fetching user bookings:', error);
		res.status(500).json({
			message: 'Internal server error',
			error: process.env.NODE_ENV === 'development' ? error : undefined,
		});
	}
};

export const getBookingById = async (
	req: AuthenticatedRequest,
	res: Response
): Promise<void> => {
	try {
		const { id } = req.params;

		if (!req.user) {
			res.status(401).json({
				message: 'Authentication required',
			});
			return;
		}

		const booking = await prisma.bookings.findUnique({
			where: { id: parseInt(id) },
			include: {
				events: {
					include: {
						users: {
							select: {
								id: true,
								name: true,
								email: true,
							},
						},
					},
				},
				payments: true,
				users: {
					select: {
						id: true,
						name: true,
						email: true,
					},
				},
			},
		});

		if (!booking) {
			res.status(404).json({
				message: 'Booking not found',
			});
			return;
		}

		// Check if user owns this booking or is the organizer
		if (
			booking.user_id !== parseInt(req.user.id) &&
			booking.events.organizer_id !== parseInt(req.user.id)
		) {
			res.status(403).json({
				message: 'Access denied',
			});
			return;
		}

		res.json({
			booking,
		});
	} catch (error) {
		console.error('Error fetching booking:', error);
		res.status(500).json({
			message: 'Internal server error',
			error: process.env.NODE_ENV === 'development' ? error : undefined,
		});
	}
};

export const cancelBooking = async (
	req: AuthenticatedRequest,
	res: Response
): Promise<void> => {
	try {
		const { id } = req.params;

		if (!req.user) {
			res.status(401).json({
				message: 'Authentication required',
			});
			return;
		}

		const booking = await prisma.bookings.findUnique({
			where: { id: parseInt(id) },
			include: {
				events: true,
				payments: true,
			},
		});

		if (!booking) {
			res.status(404).json({
				message: 'Booking not found',
			});
			return;
		}

		// Check if user owns this booking
		if (booking.user_id !== parseInt(req.user.id)) {
			res.status(403).json({
				message: 'Access denied',
			});
			return;
		}

		// Check if booking can be cancelled
		if (booking.status === 'cancelled') {
			res.status(400).json({
				message: 'Booking is already cancelled',
			});
			return;
		}

		const eventDateTime = new Date(
			`${booking.events.date.toISOString().split('T')[0]}T${booking.events.time}`
		);
		if (eventDateTime < new Date()) {
			res.status(400).json({
				message: 'Cannot cancel booking for past events',
			});
			return;
		}

		// Cancel booking and restore seats
		await prisma.$transaction(async (tx) => {
			// Update booking status
			await tx.bookings.update({
				where: { id: parseInt(id) },
				data: { status: 'cancelled' },
			});

			// Update payment status
			await tx.payments.updateMany({
				where: { booking_id: parseInt(id) },
				data: { status: 'cancelled' },
			});

			// Restore seats
			await tx.events.update({
				where: { id: booking.event_id },
				data: {
					available_seats: {
						increment: booking.quantity,
					},
				},
			});

			// TODO: Restore points and coupons if payment was rejected
			// This would require tracking which points/coupons were used
		});

		res.json({
			message: 'Booking cancelled successfully',
		});
	} catch (error) {
		console.error('Error cancelling booking:', error);
		res.status(500).json({
			message: 'Internal server error',
			error: process.env.NODE_ENV === 'development' ? error : undefined,
		});
	}
};

// Get attendees for all events of an organizer
export const getOrganizerAttendees = async (
	req: AuthenticatedRequest,
	res: Response
): Promise<void> => {
	try {
		if (!req.user) {
			res.status(401).json({
				message: 'Authentication required',
			});
			return;
		}

		const organizerId = parseInt(req.user.id);

		// Get all confirmed bookings for organizer's events
		const attendees = await prisma.bookings.findMany({
			where: {
				events: {
					organizer_id: organizerId,
				},
				status: 'confirmed', // Only confirmed attendees
			},
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
						location: true,
						price: true,
					},
				},
				payments: {
					select: {
						amount: true,
						payment_method: true,
						status: true,
					},
				},
			},
			orderBy: [
				{
					events: {
						date: 'asc',
					},
				},
				{
					booking_date: 'desc',
				},
			],
		});

		res.json({ attendees });
	} catch (error) {
		console.error('Error fetching attendees:', error);
		res.status(500).json({
			message: 'Internal server error',
			error: process.env.NODE_ENV === 'development' ? error : undefined,
		});
	}
};
