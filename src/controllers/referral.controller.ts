import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/app.error';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export class ReferralController {
	// Get referral stats - simplified
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

			res.json({
				success: true,
				stats: {
					totalReferrals: 0,
					totalPoints: 0,
					referralCode: 'TEMP001',
					availableRewards: [],
				},
			});
		} catch (error) {
			next(error);
		}
	}

	// Get referral history - simplified
	async getReferralHistory(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			res.json({
				success: true,
				referrals: [],
				message: 'Referral history temporarily unavailable - under maintenance',
			});
		} catch (error) {
			next(error);
		}
	}

	// Use referral points - simplified
	async useReferralPoints(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			res.json({
				success: true,
				message: 'Point usage temporarily unavailable - under maintenance',
			});
		} catch (error) {
			next(error);
		}
	}

	// Get available coupons - simplified
	async getAvailableCoupons(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			res.json({
				success: true,
				coupons: [],
				message: 'Coupons temporarily unavailable - under maintenance',
			});
		} catch (error) {
			next(error);
		}
	}

	// Get user points - simplified
	async getPoints(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			res.json({
				success: true,
				points: 0,
				message: 'Points system temporarily unavailable - under maintenance',
			});
		} catch (error) {
			next(error);
		}
	}

	// Get available prizes with real data
	async getPrizes(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			// Fetch all available prizes
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

	// Claim prize - simplified
	async claimPrize(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			res.json({
				success: false,
				message: 'Prize claiming temporarily unavailable - under maintenance',
			});
		} catch (error) {
			next(error);
		}
	}
}

export const referralController = new ReferralController();
