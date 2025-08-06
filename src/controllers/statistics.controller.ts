import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

interface AuthenticatedRequest extends Request {
	user?: any;
}

export const getOrganizerStatistics = async (
	req: AuthenticatedRequest,
	res: Response
): Promise<void> => {
	try {
		const userId = req.user?.id;
		const { period = '30', startDate, endDate } = req.query;

		if (!userId) {
			res.status(401).json({ message: 'Authentication required' });
			return;
		}

		// Calculate date range
		let dateFilter: any = {};
		if (startDate && endDate) {
			dateFilter = {
				created_at: {
					gte: new Date(startDate as string),
					lte: new Date(endDate as string),
				},
			};
		} else {
			const days = parseInt(period as string) || 30;
			const fromDate = new Date();
			fromDate.setDate(fromDate.getDate() - days);
			dateFilter = {
				created_at: {
					gte: fromDate,
				},
			};
		}

		// Get organizer's events
		const events = await prisma.events.findMany({
			where: {
				organizer_id: userId,
				...dateFilter,
			},
			include: {
				bookings: {
					include: {
						payments: true,
					},
				},
			},
		});

		// Calculate basic statistics
		const totalEvents = events.length;
		let totalRevenueUSD = 0;
		let totalRevenueIDR = 0;
		let totalAttendees = 0;
		let pendingTransactions = 0;

		const eventStats = events.map((event: any) => {
			const confirmedBookings = event.bookings.filter((booking: any) =>
				booking.payments.some((payment: any) => payment.status === 'success')
			);

			const eventRevenue = event.bookings.reduce(
				(sum: number, booking: any) => {
					const paidPayments = booking.payments.filter(
						(payment: any) => payment.status === 'success'
					);
					return (
						sum +
						paidPayments.reduce(
							(paymentSum: number, payment: any) =>
								paymentSum + Number(payment.amount),
							0
						)
					);
				},
				0
			);

			// Add to total revenue based on event currency
			if (event.currency === 'USD') {
				totalRevenueUSD += eventRevenue;
			} else {
				totalRevenueIDR += eventRevenue;
			}

			totalAttendees += confirmedBookings.length;

			// Count pending transactions for this event
			const eventPendingTransactions = event.bookings.filter((booking: any) =>
				booking.payments.some((payment: any) => payment.status === 'pending')
			).length;
			pendingTransactions += eventPendingTransactions;

			return {
				eventId: event.id,
				title: event.title,
				date: event.date,
				attendees: confirmedBookings.length,
				revenue: eventRevenue,
				currency: event.currency,
				capacity: event.total_seats,
				ticketsSold: confirmedBookings.length,
			};
		});

		// Generate mock monthly data for demonstration (using combined revenue for mock data)
		const combinedRevenue = totalRevenueUSD + totalRevenueIDR / 15000; // Rough USD conversion for demo
		const monthlyRevenue = [
			{
				month: '2025-01',
				revenueUSD: Math.floor(totalRevenueUSD * 0.1),
				revenueIDR: Math.floor(totalRevenueIDR * 0.1),
			},
			{
				month: '2025-02',
				revenueUSD: Math.floor(totalRevenueUSD * 0.15),
				revenueIDR: Math.floor(totalRevenueIDR * 0.15),
			},
			{
				month: '2025-03',
				revenueUSD: Math.floor(totalRevenueUSD * 0.2),
				revenueIDR: Math.floor(totalRevenueIDR * 0.2),
			},
			{
				month: '2025-04',
				revenueUSD: Math.floor(totalRevenueUSD * 0.25),
				revenueIDR: Math.floor(totalRevenueIDR * 0.25),
			},
			{
				month: '2025-05',
				revenueUSD: Math.floor(totalRevenueUSD * 0.3),
				revenueIDR: Math.floor(totalRevenueIDR * 0.3),
			},
		];

		// Get top selling events
		const topEvents = eventStats
			.sort((a, b) => b.revenue - a.revenue)
			.slice(0, 5);

		res.json({
			success: true,
			data: {
				overview: {
					totalEvents,
					totalRevenueUSD,
					totalRevenueIDR,
					totalBookings: events.reduce(
						(sum, event: any) => sum + event.bookings.length,
						0
					),
					totalAttendees,
					pendingTransactions,
					pendingRevenue: 0, // Can be calculated if needed
				},
				monthlyRevenue,
				eventStats,
				topEvents,
				period: {
					days: parseInt(period as string) || 30,
					startDate: startDate || null,
					endDate: endDate || null,
				},
			},
		});
	} catch (error) {
		console.error('Error fetching organizer statistics:', error);
		res.status(500).json({
			success: false,
			message: 'Failed to fetch statistics',
		});
	}
};
