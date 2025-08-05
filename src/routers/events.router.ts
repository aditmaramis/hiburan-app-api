import { Router } from 'express';
import {
	createEvent,
	getOrganizerEvents,
	getEventById,
	updateEvent,
	deleteEvent,
	getAllEvents,
} from '../controllers/events.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();

// Public routes
router.get('/', getAllEvents);

// Protected routes (require authentication)
router.get('/organizer', verifyToken, getOrganizerEvents);
router.post('/', verifyToken, createEvent);
router.put('/:id', verifyToken, updateEvent);
router.delete('/:id', verifyToken, deleteEvent);

// Public routes that need to be after protected ones
router.get('/:id', getEventById);

export default router;
