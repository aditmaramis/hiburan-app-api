import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '../generated/prisma';
import { AppError } from '../ut			// Get user's available points
			const availablePoints = await prisma.referral_points.findMany({
				where: {
					user_id: userId,app.error';

const prisma = new PrismaClient();

export class ReferralController {
	// Get user's referral points
	async getPoints(req: Request, res: Response, next: NextFunction): Promise<void> {
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
						gt: new Date()
					}
				},
				include: {
					referred_user: {
						select: {
							name: true,
							email: true,
							created_at: true
						}
					}
				},
				orderBy: {
					earned_at: 'desc'
				}
			});

			const totalPoints = activePoints.reduce((sum, point) => sum + point.points, 0);

			res.status(200).json({
				success: true,
				data: {
					totalPoints,
					pointsHistory: activePoints
				}
			});
		} catch (error) {
			next(error);
		}
	}

	// Get user's referral statistics
	async getReferralStats(req: Request, res: Response, next: NextFunction): Promise<void> {
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
							created_at: true
						},
						orderBy: {
							created_at: 'desc'
						}
					}
				}
			});

			if (!user) {
				throw new AppError('User not found', 404);
			}

			res.status(200).json({
				success: true,
				data: {
					referralCode: user.referral_code,
					totalReferrals: user.referred_users.length,
					referredUsers: user.referred_users
				}
			});
		} catch (error) {
			next(error);
		}
	}

	// Get available prizes
	async getPrizes(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const prizes = await prisma.prizes.findMany({
				where: {
					stock: {
						gt: 0
					}
				},
				orderBy: {
					points_required: 'asc'
				}
			});

			res.status(200).json({
				success: true,
				data: prizes
			});
		} catch (error) {
			next(error);
		}
	}

	// Claim a prize
	async claimPrize(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const userId = parseInt(req.user?.id as string);
			const { prizeId } = req.body;

			if (!userId) {
				throw new AppError('Unauthorized', 401);
			}

			// Get prize details
			const prize = await prisma.prizes.findUnique({
				where: { id: parseInt(prizeId) }
			});

			if (!prize) {
				throw new AppError('Prize not found', 404);
			}

			if (prize.stock <= 0) {
				throw new AppError('Prize out of stock', 400);
			}

			// Get user's available points
			const activePoints = await prisma.referral_points.findMany({
				where: {
					user_id: parseInt(userId),
					used: false,
					expires_at: {
						gt: new Date()
					}
				},
				orderBy: {
					earned_at: 'asc' // Use oldest points first
				}
			});

			const totalPoints = activePoints.reduce((sum, point) => sum + point.points, 0);

			if (totalPoints < prize.points_required) {
				throw new AppError('Insufficient points', 400);
			}

			// Use points and claim prize in a transaction
			await prisma.$transaction(async (tx) => {
				let pointsToUse = prize.points_required;
				
				for (const pointEntry of activePoints) {
					if (pointsToUse <= 0) break;
					
					if (pointEntry.points <= pointsToUse) {
						// Use all points from this entry
						await tx.referral_points.update({
							where: { id: pointEntry.id },
							data: { used: true }
						});
						pointsToUse -= pointEntry.points;
					} else {
						// Partial use - split the points
						await tx.referral_points.update({
							where: { id: pointEntry.id },
							data: { points: pointEntry.points - pointsToUse }
						});
						
						// Create a new entry for used points
						await tx.referral_points.create({
							data: {
								user_id: pointEntry.user_id,
								points: pointsToUse,
								earned_at: pointEntry.earned_at,
								expires_at: pointEntry.expires_at,
								used: true,
								referred_user_id: pointEntry.referred_user_id
							}
						});
						pointsToUse = 0;
					}
				}

				// Claim the prize
				await tx.claimed_prizes.create({
					data: {
						user_id: parseInt(userId),
						prize_id: prize.id,
						claimed_at: new Date()
					}
				});

				// Reduce prize stock
				await tx.prizes.update({
					where: { id: prize.id },
					data: { stock: prize.stock - 1 }
				});
			});

			res.status(200).json({
				success: true,
				message: 'Prize claimed successfully'
			});
		} catch (error) {
			next(error);
		}
	}
}
