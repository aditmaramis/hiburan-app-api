import { Router } from 'express';
import { getOrganizerStatistics } from '../controllers/statistics.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();

// Get organizer statistics
router.get('/organizer', verifyToken, getOrganizerStatistics);

export default router;
