import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AppError } from '../utils/app.error';
import prisma from '../lib/prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

// Add some basic logging for debugging
console.log('AuthController initialized');
console.log('JWT_SECRET exists:', !!process.env.JWT_SECRET);
console.log('DATABASE_URL exists:', !!process.env.DATABASE_URL);
console.log(
	'DATABASE_URL value:',
	process.env.DATABASE_URL?.substring(0, 50) + '...'
);

export class AuthController {
	async login(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			console.log('Login attempt:', req.body);
			const { email, password } = req.body;
			if (!email || !password) {
				throw new AppError('Email and password are required.', 400);
			}
			console.log('Finding user with email:', email);
			const user = await prisma.users.findUnique({ where: { email } });
			console.log('User found:', !!user);
			if (!user || !(await bcrypt.compare(password, user.password))) {
				throw new AppError('Invalid credentials.', 401);
			}
			const token = jwt.sign(
				{ id: user.id, email: user.email, role: user.role },
				JWT_SECRET,
				{ expiresIn: '7d' }
			);
			res.status(200).json({
				success: true,
				message: 'Login successful',
				token,
				user: {
					id: user.id,
					name: user.name,
					email: user.email,
					role: user.role,
				},
			});
		} catch (error) {
			next(error);
		}
	}

	async register(
		req: Request,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const { name, email, password, phone, referral, role } = req.body;
			if (!email || !password) {
				throw new AppError('Email and password are required.', 400);
			}

			// Default role to 'customer' if not provided
			const userRole = role || 'customer';

			// Validate role - only allow 'customer' or 'organizer'
			if (userRole !== 'customer' && userRole !== 'organizer') {
				throw new AppError(
					'Role must be either "customer" or "organizer".',
					400
				);
			}

			const existing = await prisma.users.findUnique({ where: { email } });
			if (existing) {
				throw new AppError('Email already registered.', 409);
			}
			const hashed = await bcrypt.hash(password, 10);

			let referred_by_id = undefined;
			let referrerUser = null;

			// Check if referral code is provided and valid
			if (referral) {
				referrerUser = await prisma.users.findUnique({
					where: { referral_code: referral },
				});
				if (referrerUser) {
					referred_by_id = referrerUser.id;
				}
			}

			// Generate unique referral code for new user
			const referralCode = `REF${Date.now()}${Math.random().toString(36).substr(2, 5)}`;

			// Use transaction to handle referral rewards
			const result = await prisma.$transaction(async (tx) => {
				// Create new user
				const userData: any = {
					name,
					email,
					password: hashed,
					role: userRole,
					referral_code: referralCode,
					updated_at: new Date(),
				};
				if (referred_by_id) userData.referred_by_id = referred_by_id;

				const newUser = await tx.users.create({
					data: userData,
				});

				// If user was referred, create rewards
				if (referrerUser && referred_by_id) {
					const now = new Date();
					const expirationDate = new Date();
					expirationDate.setMonth(expirationDate.getMonth() + 3); // 3 months expiration

					// Give 10,000 points to referrer
					await tx.referral_points.create({
						data: {
							user_id: referred_by_id,
							points: 10000,
							earned_at: now,
							expires_at: expirationDate,
							used: false,
							referred_user_id: newUser.id,
						},
					});

					// Give discount coupon to new user (10% discount)
					const couponCode = `WELCOME${Date.now()}${Math.random().toString(36).substr(2, 4)}`;
					await tx.coupons.create({
						data: {
							code: couponCode,
							user_id: newUser.id,
							discount_percent: 10,
							issued_at: now,
							expires_at: expirationDate,
							is_used: false,
							source: 'referral',
						},
					});
				}

				return newUser;
			});

			res.status(201).json({
				success: true,
				message: 'Registration successful',
				user: {
					id: result.id,
					name: result.name,
					email: result.email,
					role: result.role,
					referral_code: result.referral_code,
				},
				...(referrerUser && {
					referralRewards: {
						message: 'Referral rewards applied!',
						discountCoupon:
							'You received a 10% discount coupon valid for 3 months',
						referrerReward: `${referrerUser.name} received 10,000 points`,
					},
				}),
			});
		} catch (error) {
			next(error);
		}
	}
}
