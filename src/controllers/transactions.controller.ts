import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import { sendPaymentStatusEmail } from '../utils/email.service';

const prisma = new PrismaClient();

// We need to add points/coupons tracking to properly restore them
// For now, we'll implement a simplified restoration logic

export const getOrganizerTransactions = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const organizerId = parseInt(req.user?.id || '0');

		if (!organizerId) {
			res.status(401).json({ message: 'User not authenticated' });
			return;
		}

		// Get all payments/transactions for events organized by this organizer
		const transactions = await prisma.payments.findMany({
			include: {
				bookings: {
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
								price: true,
								date: true,
								time: true,
								location: true,
							},
						},
					},
				},
			},
			where: {
				bookings: {
					events: {
						organizer_id: organizerId,
					},
				},
			},
			orderBy: {
				created_at: 'desc',
			},
		});

		res.json({ transactions });
	} catch (error) {
		console.error('Error fetching organizer transactions:', error);
		res.status(500).json({ message: 'Failed to fetch transactions' });
	}
};

export const updateTransactionStatus = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { transactionId } = req.params;
		const { status } = req.body;
		const organizerId = parseInt(req.user?.id || '0');

		if (!organizerId) {
			res.status(401).json({ message: 'User not authenticated' });
			return;
		}

		if (!['accepted', 'rejected'].includes(status)) {
			res
				.status(400)
				.json({ message: 'Invalid status. Must be "accepted" or "rejected"' });
			return;
		}

		// Verify that this transaction belongs to an event organized by this organizer
		const transaction = await prisma.payments.findFirst({
			include: {
				bookings: {
					include: {
						events: true,
						users: {
							select: {
								id: true,
								name: true,
								email: true,
							},
						},
					},
				},
			},
			where: {
				id: parseInt(transactionId),
				bookings: {
					events: {
						organizer_id: organizerId,
					},
				},
			},
		});

		if (!transaction) {
			res
				.status(404)
				.json({ message: 'Transaction not found or unauthorized' });
			return;
		}

		// Update the payment status
		const updatedTransaction = await prisma.payments.update({
			where: {
				id: parseInt(transactionId),
			},
			data: {
				status,
				updated_at: new Date(),
			},
			include: {
				bookings: {
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
								price: true,
								date: true,
								time: true,
								location: true,
							},
						},
					},
				},
			},
		});

		// If accepted, also update the booking status
		if (status === 'accepted') {
			await prisma.bookings.update({
				where: {
					id: transaction.booking_id,
				},
				data: {
					status: 'confirmed',
				},
			});

			// Send acceptance email
			try {
				await sendPaymentStatusEmail(
					transaction.bookings.users.email,
					transaction.bookings.users.name || 'Customer',
					transaction.bookings.events,
					transaction.bookings,
					'accepted'
				);
			} catch (emailError) {
				console.error('Failed to send acceptance email:', emailError);
			}
		} else if (status === 'rejected') {
			// Perform rejection operations in a transaction
			await prisma.$transaction(async (tx) => {
				// Update booking status
				await tx.bookings.update({
					where: {
						id: transaction.booking_id,
					},
					data: {
						status: 'cancelled',
					},
				});

				// Restore seats
				await tx.events.update({
					where: {
						id: transaction.bookings.events.id,
					},
					data: {
						available_seats: {
							increment: transaction.bookings.quantity,
						},
					},
				});

				// TODO: Restore points and coupons
				// Note: This requires additional tracking in the database
				// For now, we'll implement a basic restoration strategy

				// Find recently used points for this user (within last hour)
				// This is a simplified approach - in production, you'd want to track exactly which points were used
				const recentlyUsedPoints = await tx.referral_points.findMany({
					where: {
						user_id: transaction.bookings.users.id,
						used: true,
						// Find points used around the booking time (within 1 hour)
						earned_at: {
							gte: new Date(
								transaction.bookings.booking_date.getTime() - 60 * 60 * 1000
							),
						},
					},
					orderBy: {
						earned_at: 'desc',
					},
					take: 10, // Limit to recent points
				});

				// Restore the points (simplified logic)
				if (recentlyUsedPoints.length > 0) {
					await tx.referral_points.updateMany({
						where: {
							id: {
								in: recentlyUsedPoints.map((p) => p.id),
							},
						},
						data: {
							used: false,
						},
					});
				}

				// Find recently used coupons for this user
				const recentlyUsedCoupon = await tx.coupons.findFirst({
					where: {
						user_id: transaction.bookings.users.id,
						is_used: true,
						// Find coupon used around the booking time (within 1 hour)
						issued_at: {
							gte: new Date(
								transaction.bookings.booking_date.getTime() - 60 * 60 * 1000
							),
						},
					},
					orderBy: {
						issued_at: 'desc',
					},
				});

				// Restore the coupon
				if (recentlyUsedCoupon) {
					await tx.coupons.update({
						where: {
							id: recentlyUsedCoupon.id,
						},
						data: {
							is_used: false,
						},
					});
				}
			});

			// Send rejection email with restoration info
			try {
				const pointsRestored = 0; // We'd calculate this based on actual restoration
				const couponRestored = null; // We'd get this from actual restoration

				await sendPaymentStatusEmail(
					transaction.bookings.users.email,
					transaction.bookings.users.name || 'Customer',
					transaction.bookings.events,
					transaction.bookings,
					'rejected',
					pointsRestored,
					couponRestored
				);
			} catch (emailError) {
				console.error('Failed to send rejection email:', emailError);
			}
		}

		res.json({
			message: `Transaction ${status} successfully`,
			transaction: updatedTransaction,
		});
	} catch (error) {
		console.error('Error updating transaction status:', error);
		res.status(500).json({ message: 'Failed to update transaction status' });
	}
};

export const getTransactionById = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { transactionId } = req.params;
		const organizerId = parseInt(req.user?.id || '0');

		if (!organizerId) {
			res.status(401).json({ message: 'User not authenticated' });
			return;
		}

		const transaction = await prisma.payments.findFirst({
			include: {
				bookings: {
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
								price: true,
								date: true,
								time: true,
								location: true,
								image: true,
							},
						},
					},
				},
			},
			where: {
				id: parseInt(transactionId),
				bookings: {
					events: {
						organizer_id: organizerId,
					},
				},
			},
		});

		if (!transaction) {
			res
				.status(404)
				.json({ message: 'Transaction not found or unauthorized' });
			return;
		}

		res.json({ transaction });
	} catch (error) {
		console.error('Error fetching transaction:', error);
		res.status(500).json({ message: 'Failed to fetch transaction' });
	}
};
