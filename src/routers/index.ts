import { Router } from 'express';
import { AuthRouter } from './auth.router';
import referralRouter from './referral.router';
import profileRouter from './profile.router';

const router = Router();

// Initialize class-based routers
const authRouter = new AuthRouter();

// Auth routes
router.use('/auth', authRouter.getRouter());

// Referral system routes
router.use('/referral', referralRouter);

// Profile management routes
router.use('/profile', profileRouter);

export default router;
