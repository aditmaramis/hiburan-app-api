-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('USD', 'IDR');

-- AlterTable
ALTER TABLE "bookings" ADD COLUMN     "currency" "Currency" NOT NULL DEFAULT 'IDR';

-- AlterTable
ALTER TABLE "events" ADD COLUMN     "currency" "Currency" NOT NULL DEFAULT 'IDR';

-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "currency" "Currency" NOT NULL DEFAULT 'IDR';
