import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    name?: string;
    role: string;
  };
}

// POST /api/reviews - Add a review for an event
export const addReview = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { event_id, rating, comment } = req.body;
    const user_id = req.user?.id;
    if (!user_id) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }
    // Check if user has a booking for this event and the event date is in the past
    const booking = await prisma.bookings.findFirst({
      where: {
        event_id: Number(event_id),
        user_id: Number(user_id),
        status: 'confirmed',
      },
    });
    if (!booking) {
      res.status(403).json({
        success: false,
        message: 'You can only review events you attended.',
      });
      return;
    }
    // Check if user already left a review for this event
    const existingReview = await prisma.reviews.findFirst({
      where: {
        event_id: Number(event_id),
        user_id: Number(user_id),
      },
    });
    if (existingReview) {
      res.status(400).json({
        success: false,
        message: 'You have already reviewed this event.',
      });
      return;
    }
    // Create review
    const review = await prisma.reviews.create({
      data: {
        event_id: Number(event_id),
        user_id: Number(user_id),
        rating: Number(rating),
        comment,
        created_at: new Date(),
      },
    });
    res.json({ success: true, review });
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ success: false, message: 'Failed to add review' });
  }
};

// GET /api/reviews/:event_id - Get reviews for an event
export const getEventReviews = async (req: Request, res: Response): Promise<void> => {
  try {
    const { event_id } = req.params;
    const reviews = await prisma.reviews.findMany({
      where: { event_id: Number(event_id) },
      include: { users: { select: { name: true } } },
      orderBy: { created_at: 'desc' },
    });
    res.json({ success: true, reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch reviews' });
  }
};
