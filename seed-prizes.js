const { PrismaClient } = require('./src/generated/prisma');

const prisma = new PrismaClient();

async function main() {
	// Create sample prizes
	const prizes = [
		{
			name: 'Free Event Ticket',
			description: 'Get a free ticket to any event (up to IDR 100,000 value)',
			points_required: 500,
			stock: 10,
		},
		{
			name: '10% Discount Coupon',
			description: '10% discount on your next event booking',
			points_required: 250,
			stock: 25,
		},
		{
			name: '20% Discount Coupon',
			description: '20% discount on your next event booking',
			points_required: 750,
			stock: 15,
		},
		{
			name: 'VIP Event Pass',
			description: 'VIP access to any premium event',
			points_required: 1000,
			stock: 5,
		},
		{
			name: 'Event Merchandise Bundle',
			description: 'Exclusive event merchandise package',
			points_required: 300,
			stock: 20,
		},
	];

	console.log('Creating prizes...');

	// First, check if prizes already exist
	const existingPrizes = await prisma.prizes.findMany();

	if (existingPrizes.length > 0) {
		console.log(
			`Found ${existingPrizes.length} existing prizes. Skipping seed.`
		);
		return;
	}

	for (const prize of prizes) {
		const created = await prisma.prizes.create({
			data: prize,
		});
		console.log(`Created prize: ${created.name}`);
	}

	console.log('Prizes seeded successfully!');
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
