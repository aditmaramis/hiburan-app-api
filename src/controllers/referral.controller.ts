import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '../generated/prisma';
import { AppError } from '../utils/app.error';

const prisma = new PrismaClient();

export class ReferralController {
	// Get user's referral points
	async getPoints(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const userId = parseInt(req.user?.id as string);

			if (!userId) {
				throw new AppError('Unauthorized', 401);
			}

			// Get active points (not expired and not used)
			const activePoints = await prisma.referral_points.findMany({
				where: {
					user_id: userId,
					used: false,
					expires_at: {
						gte: new Date(),
					},
				},
				include: {
					referred_user: {
						select: {
							name: true,
							email: true,
						},
					},
				},
				orderBy: {
					earned_at: 'desc',
				},
			});

			// Calculate total available points
			const totalPoints = activePoints.reduce(
				(sum: number, point: any) => sum + point.points,
				0
			);

			// Get expired points for information
			const expiredPoints = await prisma.referral_points.findMany({
				where: {
					user_id: userId,
					expires_at: {
						lt: new Date(),
					},
				},
			});

			const totalExpired = expiredPoints.reduce(
				(sum: number, point: any) => sum + point.points,
				0
			);

			res.json({
				success: true,
				data: {
					totalPoints,
					totalExpired,
					pointsHistory: activePoints,
					expiringIn30Days: activePoints.filter((point) => {
						const thirtyDaysFromNow = new Date();
						thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
						return point.expires_at <= thirtyDaysFromNow;
					}),
				},
			});
		} catch (error) {
			next(error);
		}
	}

	// Get referral statistics
	async getReferralStats(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const userId = parseInt(req.user?.id as string);

			if (!userId) {
				throw new AppError('Unauthorized', 401);
			}

			const user = await prisma.users.findUnique({
				where: { id: userId },
				select: {
					referral_code: true,
					referred_users: {
						select: {
							name: true,
							email: true,
							created_at: true,
						},
						orderBy: {
							created_at: 'desc',
						},
					},
				},
			});

			if (!user) {
				throw new AppError('User not found', 404);
			}

			// Get total points earned from referrals
			const totalPointsEarned = await prisma.referral_points.aggregate({
				where: {
					user_id: userId,
				},
				_sum: {
					points: true,
				},
			});

			res.json({
				success: true,
				data: {
					referralCode: user.referral_code,
					totalReferrals: user.referred_users.length,
					totalPointsEarned: totalPointsEarned._sum.points || 0,
					recentReferrals: user.referred_users.slice(0, 10),
				},
			});
		} catch (error) {
			next(error);
		}
	}

	// Get available prizes
	async getPrizes(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const prizes = await prisma.prizes.findMany({
				where: {
					stock: {
						gt: 0,
					},
				},
				orderBy: {
					points_required: 'asc',
				},
			});

			res.json({
				success: true,
				data: prizes,
			});
		} catch (error) {
			next(error);
		}
	}

	// Claim a prize
	async claimPrize(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const userId = parseInt(req.user?.id as string);
			const { prizeId } = req.body;

			if (!userId) {
				throw new AppError('Unauthorized', 401);
			}

			// Get prize details
			const prize = await prisma.prizes.findUnique({
				where: { id: parseInt(prizeId) },
			});

			if (!prize) {
				throw new AppError('Prize not found', 404);
			}

			if (prize.stock <= 0) {
				throw new AppError('Prize out of stock', 400);
			}

			// Get user's available points
			const availablePoints = await prisma.referral_points.findMany({
				where: {
					user_id: userId,
					used: false,
					expires_at: {
						gte: new Date(),
					},
				},
				orderBy: {
					expires_at: 'asc', // Use points that expire earliest first
				},
			});

			const totalAvailablePoints = availablePoints.reduce(
				(sum: number, point: any) => sum + point.points,
				0
			);

			if (totalAvailablePoints < prize.points_required) {
				throw new AppError(
					`Insufficient points. You need ${prize.points_required} points but have ${totalAvailablePoints}`,
					400
				);
			}

			// Use transaction to claim prize
			await prisma.$transaction(async (tx: any) => {
				// Deduct points (using oldest points first)
				let pointsToDeduct = prize.points_required;
				const pointsToUpdate = [];

				for (const point of availablePoints) {
					if (pointsToDeduct <= 0) break;

					if (point.points <= pointsToDeduct) {
						// Use entire point entry
						pointsToUpdate.push({ id: point.id, used: true });
						pointsToDeduct -= point.points;
					} else {
						// Partial use - need to split the points
						// Create a new used entry for the amount used
						await tx.referral_points.create({
							data: {
								user_id: userId,
								points: pointsToDeduct,
								earned_at: point.earned_at,
								expires_at: point.expires_at,
								used: true,
								referred_user_id: point.referred_user_id,
							},
						});

						// Update original entry with remaining points
						await tx.referral_points.update({
							where: { id: point.id },
							data: { points: point.points - pointsToDeduct },
						});

						pointsToDeduct = 0;
					}
				}

				// Mark used points as used
				for (const pointUpdate of pointsToUpdate) {
					await tx.referral_points.update({
						where: { id: pointUpdate.id },
						data: { used: pointUpdate.used },
					});
				}

				// Create claimed prize record
				await tx.claimed_prizes.create({
					data: {
						user_id: userId,
						prize_id: prize.id,
						claimed_at: new Date(),
					},
				});

				// Reduce prize stock
				await tx.prizes.update({
					where: { id: prize.id },
					data: { stock: prize.stock - 1 },
				});
			});

			res.json({
				success: true,
				message: `Successfully claimed ${prize.name}!`,
				data: {
					prize: {
						name: prize.name,
						description: prize.description,
						pointsUsed: prize.points_required,
					},
				},
			});
		} catch (error) {
			next(error);
		}
	}
}
