import { Router } from 'express';
import { ProfileController } from '../controllers/profile.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();

// Public routes (no authentication required)
// Request password reset (email-based)
router.post('/reset-password-request', ProfileController.requestPasswordReset);

// Reset password with token
router.post('/reset-password', ProfileController.resetPassword);

// Protected routes (authentication required)
router.use(verifyToken);

// Get user profile
router.get('/', ProfileController.getProfile);

// Update user profile
router.put('/', ProfileController.updateProfile);

// Change password
router.put('/change-password', ProfileController.changePassword);

// Delete account
router.delete('/', ProfileController.deleteAccount);

export default router;
