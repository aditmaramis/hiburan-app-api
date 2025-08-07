import { Router } from 'express';
import { addReview, getEventReviews } from '../controllers/reviews.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();

// Add a review (only for authenticated users who attended)
router.post('/', verifyToken, addReview);

// Get reviews for an event
router.get('/:event_id', getEventReviews);

export default router;
