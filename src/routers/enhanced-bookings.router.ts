import { Router } from 'express';
import {
	createBooking,
	submitPaymentProof,
	uploadPaymentProof,
	acceptPayment,
	rejectPayment,
	cancelBooking,
	getUserBookings,
	getBookingsForReview,
	getUserPoints,
	calculatePricePreview,
	processExpiredTransactions,
} from '../controllers/enhanced-bookings.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();

// User booking routes
router.post('/bookings', verifyToken, createBooking);
router.post('/bookings/preview', verifyToken, calculatePricePreview);
router.post(
	'/bookings/:booking_id/payment-proof',
	verifyToken,
	uploadPaymentProof,
	submitPaymentProof
);
router.patch('/bookings/:booking_id/cancel', verifyToken, cancelBooking);
router.get('/bookings', verifyToken, getUserBookings);

// Admin routes
router.get('/admin/bookings', verifyToken, getBookingsForReview);
router.patch('/admin/bookings/:booking_id/accept', verifyToken, acceptPayment);
router.patch('/admin/bookings/:booking_id/reject', verifyToken, rejectPayment);

// Points and rewards
router.get('/user/points', verifyToken, getUserPoints);

// System maintenance (for cron jobs)
router.post('/system/process-expired', processExpiredTransactions);

export default router;
