import { Router } from 'express';
import {
	createBooking,
	getUserBookings,
	getBookingById,
	cancelBooking,
	getOrganizerAttendees,
} from '../controllers/bookings.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();

// All booking routes require authentication
router.use(verifyToken);

// Create a new booking
router.post('/', createBooking);

// Get all bookings for the authenticated user
router.get('/', getUserBookings);

// Get attendees for organizer's events
router.get('/attendees', getOrganizerAttendees);

// Get a specific booking by ID
router.get('/:id', getBookingById);

// Cancel a booking
router.delete('/:id', cancelBooking);

export default router;
