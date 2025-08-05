import { Router, Request, Response, NextFunction } from 'express';
import {
	uploadEventImage,
	uploadProfileImage,
} from '../middlewares/upload.middleware';
import { verifyToken } from '../middlewares/auth.middleware';
import path from 'path';

const router = Router();

// Upload event image
router.post(
	'/events',
	verifyToken,
	(req: Request, res: Response, next: NextFunction) => {
		uploadEventImage(req, res, (err) => {
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

			// Return the image URL that can be used
			const imageUrl = `/uploads/events/${req.file.filename}`;

			res.status(200).json({
				status: 'success',
				message: 'Image uploaded successfully',
				data: {
					imageUrl,
					filename: req.file.filename,
					originalName: req.file.originalname,
					size: req.file.size,
				},
			});
		});
	}
);

// Upload profile image
router.post(
	'/profiles',
	verifyToken,
	(req: Request, res: Response, next: NextFunction) => {
		uploadProfileImage(req, res, (err) => {
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

			// Return the image URL that can be used
			const imageUrl = `/uploads/profiles/${req.file.filename}`;

			res.status(200).json({
				status: 'success',
				message: 'Profile image uploaded successfully',
				data: {
					imageUrl,
					filename: req.file.filename,
					originalName: req.file.originalname,
					size: req.file.size,
				},
			});
		});
	}
);

export default router;
