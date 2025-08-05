/*
  Warnings:

  - You are about to drop the column `ticket_id` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `venue_id` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `event_id` on the `tickets` table. All the data in the column will be lost.
  - Added the required column `available_seats` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_seats` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_ticket_id_fkey";

-- DropForeignKey
ALTER TABLE "events" DROP CONSTRAINT "events_venue_id_fkey";

-- DropForeignKey
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_event_id_fkey";

-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "ticket_id";

-- AlterTable
ALTER TABLE "events" DROP COLUMN "venue_id",
ADD COLUMN     "available_seats" INTEGER NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "price" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "time" TEXT NOT NULL,
ADD COLUMN     "total_seats" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "tickets" DROP COLUMN "event_id";
