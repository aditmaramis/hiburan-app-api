import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const createEvent = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const {
			title,
			description,
			date,
			time,
			location,
			price,
			totalSeats,
			category,
			image,
		} = req.body;

		// Validate required fields
		if (!title || !date || !time || !location || !category) {
			res.status(400).json({
				message:
					'Missing required fields: title, date, time, location, category',
			});
			return;
		}

		// Validate user is organizer
		if (!req.user || req.user.role !== 'organizer') {
			res.status(403).json({
				message: 'Access denied. Organizer role required.',
			});
			return;
		}

		// Validate date is not in the past
		const eventDateTime = new Date(`${date}T${time}`);
		if (eventDateTime < new Date()) {
			res.status(400).json({
				message: 'Event date cannot be in the past',
			});
			return;
		}

		// Create the event
		const event = await prisma.events.create({
			data: {
				title,
				description: description || null,
				date: new Date(date),
				time,
				location,
				price: parseFloat(price.toString()),
				total_seats: parseInt(totalSeats.toString()),
				available_seats: parseInt(totalSeats.toString()), // Initially all seats are available
				category,
				image: image || null,
				organizer_id: parseInt(req.user.id),
			},
		});

		res.status(201).json({
			message: 'Event created successfully',
			event,
		});
	} catch (error) {
		console.error('Error creating event:', error);
		res.status(500).json({
			message: 'Internal server error',
			error: process.env.NODE_ENV === 'development' ? error : undefined,
		});
	}
};

export const getOrganizerEvents = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		// Validate user is organizer
		if (!req.user || req.user.role !== 'organizer') {
			res.status(403).json({
				message: 'Access denied. Organizer role required.',
			});
			return;
		}

		const events = await prisma.events.findMany({
			where: {
				organizer_id: parseInt(req.user.id),
			},
			orderBy: {
				created_at: 'desc',
			},
		});

		res.json({
			events,
		});
	} catch (error) {
		console.error('Error fetching events:', error);
		res.status(500).json({
			message: 'Internal server error',
			error: process.env.NODE_ENV === 'development' ? error : undefined,
		});
	}
};

export const getEventById = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { id } = req.params;
		console.log('getEventById called with ID:', id);

		const event = await prisma.events.findUnique({
			where: {
				id: parseInt(id),
			},
			include: {
				organizer: {
					select: {
						id: true,
						name: true,
						email: true,
					},
				},
			},
		});

		console.log('Event found:', event ? 'Yes' : 'No');

		if (!event) {
			console.log('Event not found for ID:', id);
			res.status(404).json({
				message: 'Event not found',
			});
			return;
		}

		console.log('Returning event:', event.title);
		// Check if user is the organizer or allow public access for now
		res.json({
			event, // Return as { event: {...} } to match existing pattern
		});
	} catch (error) {
		console.error('Error fetching event:', error);
		res.status(500).json({
			message: 'Internal server error',
			error: process.env.NODE_ENV === 'development' ? error : undefined,
		});
	}
};

export const updateEvent = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { id } = req.params;
		const {
			title,
			description,
			date,
			time,
			location,
			price,
			totalSeats,
			category,
			image,
		} = req.body;

		// Validate user is organizer
		if (!req.user || req.user.role !== 'organizer') {
			res.status(403).json({
				message: 'Access denied. Organizer role required.',
			});
			return;
		}

		// Check if event exists and belongs to the organizer
		const existingEvent = await prisma.events.findUnique({
			where: { id: parseInt(id) },
		});

		if (!existingEvent) {
			res.status(404).json({
				message: 'Event not found',
			});
			return;
		}

		if (existingEvent.organizer_id !== parseInt(req.user.id)) {
			res.status(403).json({
				message: 'Access denied. You can only update your own events.',
			});
			return;
		}

		// Validate date is not in the past if provided
		if (date && time) {
			const eventDateTime = new Date(`${date}T${time}`);
			if (eventDateTime < new Date()) {
				res.status(400).json({
					message: 'Event date cannot be in the past',
				});
				return;
			}
		}

		// Calculate available seats if total seats changed
		let available_seats = existingEvent.available_seats;
		if (
			totalSeats &&
			parseInt(totalSeats.toString()) !== existingEvent.total_seats
		) {
			const soldSeats =
				existingEvent.total_seats - existingEvent.available_seats;
			available_seats = parseInt(totalSeats.toString()) - soldSeats;

			// Ensure available seats doesn't go negative
			if (available_seats < 0) {
				res.status(400).json({
					message: 'Cannot reduce total seats below already sold tickets',
				});
				return;
			}
		}

		// Update the event
		const updatedEvent = await prisma.events.update({
			where: { id: parseInt(id) },
			data: {
				title: title || existingEvent.title,
				description:
					description !== undefined ? description : existingEvent.description,
				date: date ? new Date(date) : existingEvent.date,
				time: time || existingEvent.time,
				location: location || existingEvent.location,
				price: price ? parseFloat(price.toString()) : existingEvent.price,
				total_seats: totalSeats
					? parseInt(totalSeats.toString())
					: existingEvent.total_seats,
				available_seats,
				category: category || existingEvent.category,
				image: image !== undefined ? image : existingEvent.image,
			},
		});

		res.json({
			message: 'Event updated successfully',
			event: updatedEvent,
		});
	} catch (error) {
		console.error('Error updating event:', error);
		res.status(500).json({
			message: 'Internal server error',
			error: process.env.NODE_ENV === 'development' ? error : undefined,
		});
	}
};

export const deleteEvent = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { id } = req.params;

		// Validate user is organizer
		if (!req.user || req.user.role !== 'organizer') {
			res.status(403).json({
				message: 'Access denied. Organizer role required.',
			});
			return;
		}

		// Check if event exists and belongs to the organizer
		const existingEvent = await prisma.events.findUnique({
			where: { id: parseInt(id) },
		});

		if (!existingEvent) {
			res.status(404).json({
				message: 'Event not found',
			});
			return;
		}

		if (existingEvent.organizer_id !== parseInt(req.user.id)) {
			res.status(403).json({
				message: 'Access denied. You can only delete your own events.',
			});
			return;
		}

		// Delete the event (this will cascade to related records if configured)
		await prisma.events.delete({
			where: { id: parseInt(id) },
		});

		res.json({
			message: 'Event deleted successfully',
		});
	} catch (error) {
		console.error('Error deleting event:', error);
		res.status(500).json({
			message: 'Internal server error',
			error: process.env.NODE_ENV === 'development' ? error : undefined,
		});
	}
};

export const getAllEvents = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { category, search, limit, offset } = req.query;

		const where: any = {};

		if (category) {
			where.category = category;
		}

		if (search) {
			where.OR = [
				{ title: { contains: search as string, mode: 'insensitive' } },
				{ description: { contains: search as string, mode: 'insensitive' } },
			];
		}

		const events = await prisma.events.findMany({
			where,
			include: {
				organizer: {
					select: {
						id: true,
						name: true,
						email: true,
					},
				},
			},
			orderBy: {
				date: 'asc',
			},
			take: limit ? parseInt(limit as string) : undefined,
			skip: offset ? parseInt(offset as string) : undefined,
		});

		res.json({
			events,
		});
	} catch (error) {
		console.error('Error fetching events:', error);
		res.status(500).json({
			message: 'Internal server error',
			error: process.env.NODE_ENV === 'development' ? error : undefined,
		});
	}
};
