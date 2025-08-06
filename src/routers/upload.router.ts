import { Router, Request, Response, NextFunction } from 'express';
import {
	uploadEventImage,
	uploadProfileImage,
	uploadPaymentProof,
} from '../middlewares/upload.cloudinary.middleware';
import { verifyToken } from '../middlewares/auth.middleware';
import { CloudinaryService } from '../utils/cloudinary.service';
import path from 'path';

const router = Router();

// Upload event image
router.post(
	'/events',
	verifyToken,
	(req: Request, res: Response, next: NextFunction) => {
		uploadEventImage(req, res, async (err: any) => {
			if (err) {
				return res.status(400).json({
					status: 'error',
					message: err.message,
				});
			}

			if (!req.file) {
				return res.status(400).json({
					status: 'error',
					message: 'No image file provided',
				});
			}

			try {
				// Upload to Cloudinary
				const uploadResult = await CloudinaryService.uploadImage(
					req.file.buffer,
					{
						folder: 'events',
						filename: `event-${Date.now()}`,
					}
				);

				res.status(200).json({
					status: 'success',
					message: 'Image uploaded successfully',
					data: {
						imageUrl: uploadResult.secure_url,
						publicId: uploadResult.public_id,
						originalName: req.file.originalname,
						size: req.file.size,
					},
				});
			} catch (error) {
				console.error('Error uploading to Cloudinary:', error);
				res.status(500).json({
					status: 'error',
					message: 'Failed to upload image',
				});
			}
		});
	}
);

// Upload profile image
router.post(
	'/profiles',
	verifyToken,
	(req: Request, res: Response, next: NextFunction) => {
		uploadProfileImage(req, res, async (err: any) => {
			if (err) {
				return res.status(400).json({
					status: 'error',
					message: err.message,
				});
			}

			if (!req.file) {
				return res.status(400).json({
					status: 'error',
					message: 'No image file provided',
				});
			}

			try {
				// Upload to Cloudinary
				const uploadResult = await CloudinaryService.uploadImage(
					req.file.buffer,
					{
						folder: 'profiles',
						filename: `profile-${Date.now()}`,
					}
				);

				res.status(200).json({
					status: 'success',
					message: 'Profile image uploaded successfully',
					data: {
						imageUrl: uploadResult.secure_url,
						publicId: uploadResult.public_id,
						originalName: req.file.originalname,
						size: req.file.size,
					},
				});
			} catch (error) {
				console.error('Error uploading to Cloudinary:', error);
				res.status(500).json({
					status: 'error',
					message: 'Failed to upload profile image',
				});
			}
		});
	}
);

// Upload payment proof
router.post(
	'/payment-proofs',
	verifyToken,
	(req: Request, res: Response, next: NextFunction) => {
		uploadPaymentProof(req, res, async (err: any) => {
			if (err) {
				return res.status(400).json({
					status: 'error',
					message: err.message,
				});
			}

			if (!req.file) {
				return res.status(400).json({
					status: 'error',
					message: 'No payment proof file provided',
				});
			}

			try {
				// Upload to Cloudinary
				const uploadResult = await CloudinaryService.uploadImage(
					req.file.buffer,
					{
						folder: 'payment_proofs',
						filename: `payment-proof-${Date.now()}`,
					}
				);

				res.status(200).json({
					status: 'success',
					message: 'Payment proof uploaded successfully',
					data: {
						imageUrl: uploadResult.secure_url,
						publicId: uploadResult.public_id,
						originalName: req.file.originalname,
						size: req.file.size,
					},
				});
			} catch (error) {
				console.error('Error uploading to Cloudinary:', error);
				res.status(500).json({
					status: 'error',
					message: 'Failed to upload payment proof',
				});
			}
		});
	}
);

export default router;
