import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from '../utils/app.error';

interface JwtPayload {
	id: string;
	email: string;
	role: string;
}

// Extend Express Request type to include user
declare global {
	namespace Express {
		interface Request {
			user?: JwtPayload;
		}
	}
}

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const verifyToken = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	try {
		const authHeader = req.headers.authorization;

		if (!authHeader || !authHeader.startsWith('Bearer ')) {
			throw new AppError('Access token required', 401);
		}

		const token = authHeader.substring(7);
		const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

		req.user = decoded;
		next();
	} catch (error) {
		if (error instanceof jwt.JsonWebTokenError) {
			next(new AppError('Invalid token', 401));
		} else {
			next(error);
		}
	}
};
