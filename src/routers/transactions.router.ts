import { Router } from 'express';
import { verifyToken } from '../middlewares/auth.middleware';
import {
	getOrganizerTransactions,
	updateTransactionStatus,
	getTransactionById,
} from '../controllers/transactions.controller';

const router = Router();

// Get all transactions for organizer (protected)
router.get('/', verifyToken, getOrganizerTransactions);

// Get specific transaction details (protected)
router.get('/:transactionId', verifyToken, getTransactionById);

// Update transaction status (accept/reject) (protected)
router.put('/:transactionId/status', verifyToken, updateTransactionStatus);

export default router;
