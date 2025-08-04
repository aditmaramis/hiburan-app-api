import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Get all events with filter, search, pagination
 */
export const getEvents = async (req: Request, res: Response) => {
  try {
    const { search, category, city, page = '1', limit = '10' } = req.query;

    const pageNumber = parseInt(page as string);
    const limitNumber = parseInt(limit as string);
    const skip = (pageNumber - 1) * limitNumber;

    const filters: any = {
      date: { gte: new Date() },
      ...(category && { category: { equals: category } }),
      ...(search && { title: { contains: String(search), mode: 'insensitive' } }),
    };

    const events = await prisma.event.findMany({
      where: {
        ...filters,
        ...(city && {
          venue: {
            city: { contains: String(city), mode: 'insensitive' }
          }
        })
      },
      include: { venue: true },
      skip,
      take: limitNumber,
      orderBy: { date: 'asc' },
    });

    res.status(200).json({ events });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/**
 * Get single event by ID
 */
export const getEventById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) res.status(400).json({ message: 'Invalid event ID' });

    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        venue: true,
        organizer: {
          select: {
            id: true,
            name: true,
            email: true,
            profilePicture: true,
          },
        },
        tickets: true,
      },
    });

    if (!event) res.status(404).json({ message: 'Event not found' });

    res.status(200).json({ event });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/**
 * Create new event
 */
export const createEvent = async (req: Request, res: Response) => {
  try {
    const { title, description, date, category, venueId } = req.body;
    if (!title || !description || !date || !category || !venueId) {
       res.status(400).json({ message: 'Missing required fields' });
    }

    const event = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date),
        category,
        venueId: Number(venueId),
        organizerId: 1, // hardcoded untuk sementara
      },
    });

    res.status(201).json({ event });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
