import { Router } from 'express';
import enhancedBookingsRouter from './enhanced-bookings.router';

const router = Router();

// Mount enhanced transaction system
router.use('/api/v1/enhanced', enhancedBookingsRouter);

export default router;
