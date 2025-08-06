import { PrismaClient } from '../generated/prisma';

// Singleton pattern for Prisma client
class PrismaService {
	private static instance: PrismaClient;

	private constructor() {}

	public static getInstance(): PrismaClient {
		if (!PrismaService.instance) {
			PrismaService.instance = new PrismaClient({
				log: ['error'],
			});

			// Handle connection events
			PrismaService.instance
				.$connect()
				.then(() => {
					console.log('✅ Database connected successfully');
				})
				.catch((error: any) => {
					console.error('❌ Database connection failed:', error.message);
					// Don't exit the process, let it retry on next request
				});

			// Graceful shutdown
			process.on('beforeExit', async () => {
				await PrismaService.instance.$disconnect();
				console.log('🔌 Database disconnected');
			});
		}

		return PrismaService.instance;
	}

	public static async disconnect(): Promise<void> {
		if (PrismaService.instance) {
			await PrismaService.instance.$disconnect();
		}
	}
}

export const prisma = PrismaService.getInstance();
export default prisma;
