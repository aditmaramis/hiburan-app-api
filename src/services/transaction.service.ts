import { PrismaClient } from '../generated/prisma';
import * as emailService from '../utils/email.service';

const prisma = new PrismaClient();

export enum TransactionStatus {
	WAITING_FOR_PAYMENT = 'waiting_for_payment',
	WAITING_FOR_ADMIN_CONFIRMATION = 'waiting_for_admin_confirmation',
	CONFIRMED = 'confirmed',
	EXPIRED = 'expired',
	CANCELLED = 'cancelled',
	REJECTED = 'rejected',
}

interface CreateBookingData {
	userId: number;
	eventId: number;
	quantity: number;
	totalPrice: number;
	pointsUsed?: number;
	couponCode?: string;
	currency: 'USD' | 'IDR';
}

interface PriceCalculation {
	finalPrice: number;
	pointsDiscount: number;
	maxPointsUsable: number;
}

export class TransactionService {
	/**
	 * Calculate price with points discount
	 */
	static calculatePriceWithPoints(
		originalPrice: number,
		pointsToUse: number
	): PriceCalculation {
		// 1 point = 1 IDR discount
		const maxPointsUsable = Math.floor(originalPrice * 0.8); // Max 80% discount
		const actualPointsUsed = Math.min(pointsToUse, maxPointsUsable);
		const pointsDiscount = actualPointsUsed;
		const finalPrice = Math.max(0, originalPrice - pointsDiscount);

		return {
			finalPrice,
			pointsDiscount,
			maxPointsUsable,
		};
	}

	/**
	 * Create a new booking
	 */
	static async createBooking(data: CreateBookingData) {
		try {
			// Create booking
			const booking = await prisma.bookings.create({
				data: {
					user_id: data.userId,
					event_id: data.eventId,
					quantity: data.quantity,
					total_price: data.totalPrice,
					currency: data.currency,
					booking_date: new Date(),
					status: TransactionStatus.WAITING_FOR_PAYMENT,
				},
			});

			// Create payment record
			await prisma.payments.create({
				data: {
					booking_id: booking.id,
					amount: data.totalPrice,
					currency: data.currency,
					payment_method: 'bank_transfer',
					payment_date: new Date(),
					status: TransactionStatus.WAITING_FOR_PAYMENT,
					updated_at: new Date(),
				},
			});

			return booking;
		} catch (error) {
			console.error('Error creating booking:', error);
			throw new Error('Failed to create booking');
		}
	}

	/**
	 * Upload payment proof
	 */
	static async uploadPaymentProof(
		bookingId: number,
		paymentProofUrl: string,
		userId: number
	) {
		try {
			// Update payment with proof
			await prisma.payments.updateMany({
				where: { booking_id: bookingId },
				data: {
					payment_proof: paymentProofUrl,
					status: TransactionStatus.WAITING_FOR_ADMIN_CONFIRMATION,
					updated_at: new Date(),
				},
			});

			// Update booking status
			const booking = await prisma.bookings.update({
				where: { id: bookingId },
				data: { status: TransactionStatus.WAITING_FOR_ADMIN_CONFIRMATION },
			});

			return booking;
		} catch (error) {
			console.error('Error uploading payment proof:', error);
			throw new Error('Failed to upload payment proof');
		}
	}

	/**
	 * Accept payment
	 */
	static async acceptPayment(bookingId: number, adminId: number) {
		try {
			// Update payment status
			await prisma.payments.updateMany({
				where: { booking_id: bookingId },
				data: {
					status: TransactionStatus.CONFIRMED,
					updated_at: new Date(),
				},
			});

			// Update booking status
			const booking = await prisma.bookings.update({
				where: { id: bookingId },
				data: { status: TransactionStatus.CONFIRMED },
			});

			return booking;
		} catch (error) {
			console.error('Error accepting payment:', error);
			throw new Error('Failed to accept payment');
		}
	}

	/**
	 * Reject payment
	 */
	static async rejectPayment(
		bookingId: number,
		adminId: number,
		reason: string
	) {
		try {
			// Update payment status
			await prisma.payments.updateMany({
				where: { booking_id: bookingId },
				data: {
					status: TransactionStatus.REJECTED,
					updated_at: new Date(),
				},
			});

			// Update booking status and restore seats
			await prisma.$transaction(async (tx) => {
				const booking = await tx.bookings.update({
					where: { id: bookingId },
					data: { status: TransactionStatus.REJECTED },
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
			});

			return { success: true };
		} catch (error) {
			console.error('Error rejecting payment:', error);
			throw new Error('Failed to reject payment');
		}
	}

	/**
	 * Cancel transaction
	 */
	static async cancelTransaction(
		bookingId: number,
		reason: string,
		userId: number
	) {
		try {
			// Update booking and restore seats
			await prisma.$transaction(async (tx) => {
				const booking = await tx.bookings.update({
					where: { id: bookingId },
					data: { status: TransactionStatus.CANCELLED },
				});

				// Update payment status
				await tx.payments.updateMany({
					where: { booking_id: bookingId },
					data: {
						status: TransactionStatus.CANCELLED,
						updated_at: new Date(),
					},
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
			});

			return { success: true };
		} catch (error) {
			console.error('Error canceling transaction:', error);
			throw new Error('Failed to cancel transaction');
		}
	}

	/**
	 * Get user's available points from referral_points table
	 */
	static async getUserAvailablePoints(userId: number): Promise<number> {
		try {
			const userPoints = await prisma.referral_points.aggregate({
				where: {
					user_id: userId,
					used: false,
					expires_at: {
						gt: new Date(),
					},
				},
				_sum: {
					points: true,
				},
			});

			return userPoints._sum.points || 0;
		} catch (error) {
			console.error('Error fetching user points:', error);
			return 0;
		}
	}

	/**
	 * Process expired transactions
	 */
	static async checkExpiredTransactions() {
		try {
			const now = new Date();
			const paymentDeadline = new Date(now.getTime() - 2 * 60 * 60 * 1000); // 2 hours ago
			const adminDeadline = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000); // 3 days ago

			// Expire payments waiting too long
			const expiredPayments = await prisma.bookings.updateMany({
				where: {
					status: TransactionStatus.WAITING_FOR_PAYMENT,
					booking_date: {
						lt: paymentDeadline,
					},
				},
				data: { status: TransactionStatus.EXPIRED },
			});

			// Expire admin reviews waiting too long
			const expiredAdminReviews = await prisma.bookings.updateMany({
				where: {
					status: TransactionStatus.WAITING_FOR_ADMIN_CONFIRMATION,
					booking_date: {
						lt: adminDeadline,
					},
				},
				data: { status: TransactionStatus.EXPIRED },
			});

			return {
				expiredPayments: expiredPayments.count,
				expiredAdminReviews: expiredAdminReviews.count,
			};
		} catch (error) {
			console.error('Error processing expired transactions:', error);
			throw new Error('Failed to process expired transactions');
		}
	}

	/**
	 * Private helper to reserve seats temporarily
	 */
	private static async reserveSeats(eventId: number, quantity: number) {
		await prisma.events.update({
			where: { id: eventId },
			data: {
				available_seats: {
					decrement: quantity,
				},
			},
		});
	}
}
