import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Get all events
export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany({
      orderBy: { date: 'asc' },
    });
    
    res.status(200).json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get event by ID
export const getEventById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      res.status(400).json({ message: 'Event ID is required' });
    }

    // Convert to number if your ID is Int, or keep as string if it's String
    const eventId = Number(id); // Ubah ini jika ID kamu string
    
    if (isNaN(eventId)) {
      res.status(400).json({ message: 'Invalid event ID' });
    }

    const event = await prisma.event.findUnique({
      where: { id: eventId }, // atau { id: id } jika string
      include: {
        organizer: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        }
      }
    });

    if (!event) {
      res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Create event
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
        organizerId: 1, // Sesuaikan dengan sistem auth kamu
      },
    });

    res.status(201).json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}