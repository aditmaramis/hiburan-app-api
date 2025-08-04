import { Router } from 'express';
import { ReferralController } from '../controllers/referral.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();
const referralController = new ReferralController();

// All referral routes require authentication
router.use(verifyToken);

// Get user's referral points
router.get('/points', referralController.getPoints.bind(referralController));

// Get referral statistics
router.get(
	'/stats',
	referralController.getReferralStats.bind(referralController)
);

// Get available prizes
router.get('/prizes', referralController.getPrizes.bind(referralController));

// Claim a prize
router.post(
	'/claim-prize',
	referralController.claimPrize.bind(referralController)
);

export default router;
