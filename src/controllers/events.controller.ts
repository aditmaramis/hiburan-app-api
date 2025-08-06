import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

interface AuthenticatedUser {
	id: string;
	email: string;
	name?: string;
	role: string;
}

interface AuthenticatedRequest extends Request {
	user?: AuthenticatedUser;
}

// Get all events (public)
export const getAllEvents = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const events = await prisma.events.findMany({
			select: {
				id: true,
				title: true,
				description: true,
				price: true,
				date: true,
				time: true,
				location: true,
				total_seats: true,
				available_seats: true,
				image: true,
				organizer_id: true,
				category: true,
				created_at: true,
				currency: true,
			},
			orderBy: {
				date: 'asc',
			},
		});

		res.json({
			success: true,
			events,
		});
	} catch (error) {
		console.error('Error fetching events:', error);
		res.status(500).json({
			success: false,
			message: 'Failed to fetch events',
		});
	}
};

// Get event by ID (public)
export const getEventById = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const eventId = parseInt(req.params.id);

		if (isNaN(eventId)) {
			res.status(400).json({
				success: false,
				message: 'Invalid event ID',
			});
			return;
		}

		const event = await prisma.events.findUnique({
			where: { id: eventId },
			include: {
				users: {
					select: {
						id: true,
						name: true,
						email: true,
					},
				},
			},
		});

		if (!event) {
			res.status(404).json({
				success: false,
				message: 'Event not found',
			});
			return;
		}

		res.json({
			success: true,
			event,
		});
	} catch (error) {
		console.error('Error fetching event:', error);
		res.status(500).json({
			success: false,
			message: 'Failed to fetch event',
		});
	}
};

// Create event (organizer only)
export const createEvent = async (
	req: AuthenticatedRequest,
	res: Response
): Promise<void> => {
	try {
		if (!req.user) {
			res.status(401).json({
				success: false,
				message: 'Authentication required',
			});
			return;
		}

		if (req.user.role !== 'organizer') {
			res.status(403).json({
				success: false,
				message: 'Only organizers can create events',
			});
			return;
		}

		const {
			title,
			description,
			date,
			time,
			location,
			price,
			total_seats,
			category,
			image,
			currency = 'IDR',
		} = req.body;

		// Validate required fields
		if (!title || !date || !time || !location || !price || !total_seats) {
			res.status(400).json({
				success: false,
				message: 'Missing required fields',
			});
			return;
		}

		const event = await prisma.events.create({
			data: {
				title,
				description,
				date: new Date(date),
				time,
				location,
				price: parseFloat(price),
				total_seats: parseInt(total_seats),
				available_seats: parseInt(total_seats),
				category: category || 'general',
				image: image || null,
				organizer_id: parseInt(req.user.id),
				currency,
				updated_at: new Date(),
			},
		});

		res.status(201).json({
			success: true,
			message: 'Event created successfully',
			event,
		});
	} catch (error) {
		console.error('Error creating event:', error);
		res.status(500).json({
			success: false,
			message: 'Failed to create event',
		});
	}
};

// Update event (organizer only)
export const updateEvent = async (
	req: AuthenticatedRequest,
	res: Response
): Promise<void> => {
	try {
		if (!req.user) {
			res.status(401).json({
				success: false,
				message: 'Authentication required',
			});
			return;
		}

		const eventId = parseInt(req.params.id);
		const organizerId = parseInt(req.user.id);

		if (isNaN(eventId)) {
			res.status(400).json({
				success: false,
				message: 'Invalid event ID',
			});
			return;
		}

		// Check if event exists and belongs to the organizer
		const existingEvent = await prisma.events.findFirst({
			where: {
				id: eventId,
				organizer_id: organizerId,
			},
		});

		if (!existingEvent) {
			res.status(404).json({
				success: false,
				message: 'Event not found or unauthorized',
			});
			return;
		}

		const {
			title,
			description,
			date,
			time,
			location,
			price,
			total_seats,
			category,
			image,
		} = req.body;

		const updateData: any = {};
		if (title !== undefined) updateData.title = title;
		if (description !== undefined) updateData.description = description;
		if (date !== undefined) updateData.date = new Date(date);
		if (time !== undefined) updateData.time = time;
		if (location !== undefined) updateData.location = location;
		if (price !== undefined) updateData.price = parseFloat(price);
		if (category !== undefined) updateData.category = category;
		if (image !== undefined) updateData.image = image;

		// Handle total_seats change
		if (total_seats !== undefined) {
			const newTotalSeats = parseInt(total_seats);
			const seatDifference = newTotalSeats - existingEvent.total_seats;
			updateData.total_seats = newTotalSeats;
			updateData.available_seats =
				existingEvent.available_seats + seatDifference;
		}

		const updatedEvent = await prisma.events.update({
			where: { id: eventId },
			data: {
				...updateData,
				updated_at: new Date(),
			},
		});

		res.json({
			success: true,
			message: 'Event updated successfully',
			event: updatedEvent,
		});
	} catch (error) {
		console.error('Error updating event:', error);
		res.status(500).json({
			success: false,
			message: 'Failed to update event',
		});
	}
};

// Delete event (organizer only)
export const deleteEvent = async (
	req: AuthenticatedRequest,
	res: Response
): Promise<void> => {
	try {
		if (!req.user) {
			res.status(401).json({
				success: false,
				message: 'Authentication required',
			});
			return;
		}

		const eventId = parseInt(req.params.id);
		const organizerId = parseInt(req.user.id);

		if (isNaN(eventId)) {
			res.status(400).json({
				success: false,
				message: 'Invalid event ID',
			});
			return;
		}

		// Check if event exists and belongs to the organizer
		const existingEvent = await prisma.events.findFirst({
			where: {
				id: eventId,
				organizer_id: organizerId,
			},
		});

		if (!existingEvent) {
			res.status(404).json({
				success: false,
				message: 'Event not found or unauthorized',
			});
			return;
		}

		// Check if there are any bookings for this event
		const bookingCount = await prisma.bookings.count({
			where: { event_id: eventId },
		});

		if (bookingCount > 0) {
			res.status(400).json({
				success: false,
				message: 'Cannot delete event with existing bookings',
			});
			return;
		}

		await prisma.events.delete({
			where: { id: eventId },
		});

		res.json({
			success: true,
			message: 'Event deleted successfully',
		});
	} catch (error) {
		console.error('Error deleting event:', error);
		res.status(500).json({
			success: false,
			message: 'Failed to delete event',
		});
	}
};

// Get organizer's events
export const getOrganizerEvents = async (
	req: AuthenticatedRequest,
	res: Response
): Promise<void> => {
	try {
		if (!req.user) {
			res.status(401).json({
				success: false,
				message: 'Authentication required',
			});
			return;
		}

		const organizerId = parseInt(req.user.id);

		const events = await prisma.events.findMany({
			where: { organizer_id: organizerId },
			include: {
				_count: {
					select: {
						bookings: true,
					},
				},
			},
			orderBy: {
				created_at: 'desc',
			},
		});

		res.json({
			success: true,
			events,
		});
	} catch (error) {
		console.error('Error fetching organizer events:', error);
		res.status(500).json({
			success: false,
			message: 'Failed to fetch events',
		});
	}
};
