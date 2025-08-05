import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function seedPrizes() {
	console.log('🌱 Seeding prizes...');

	const prizes = [
		{
			name: 'Free Event Ticket',
			description: '1 free ticket to any event (up to $50 value)',
			points_required: 5000,
			stock: 100,
		},
		{
			name: '10% Discount Coupon',
			description: '10% off your next ticket purchase',
			points_required: 2000,
			stock: 500,
		},
		{
			name: '25% Discount Coupon',
			description: '25% off your next ticket purchase',
			points_required: 7500,
			stock: 200,
		},
		{
			name: 'VIP Event Access',
			description: 'Upgrade to VIP for any event (up to $100 value)',
			points_required: 15000,
			stock: 50,
		},
		{
			name: 'Concert Merchandise',
			description: 'Official event merchandise package',
			points_required: 3000,
			stock: 150,
		},
		{
			name: '50% Discount Coupon',
			description: '50% off your next ticket purchase',
			points_required: 12000,
			stock: 100,
		},
		{
			name: 'Free Premium Membership',
			description: '3 months of premium membership benefits',
			points_required: 20000,
			stock: 30,
		},
		{
			name: 'Event Planning Consultation',
			description: '1-hour free consultation for event planning',
			points_required: 10000,
			stock: 25,
		},
	];

	try {
		for (const prize of prizes) {
			const existingPrize = await prisma.prizes.findFirst({
				where: { name: prize.name },
			});

			if (!existingPrize) {
				await prisma.prizes.create({
					data: prize,
				});
				console.log(`✅ Created prize: ${prize.name}`);
			} else {
				console.log(`⏭️  Prize already exists: ${prize.name}`);
			}
		}

		console.log('🎉 Prize seeding completed!');
	} catch (error) {
		console.error('❌ Error seeding prizes:', error);
	} finally {
		await prisma.$disconnect();
	}
}

// Run the seeder
if (require.main === module) {
	seedPrizes();
}

export { seedPrizes };
