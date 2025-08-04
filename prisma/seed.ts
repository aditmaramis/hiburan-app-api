import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const organizer = await prisma.user.upsert({
    where: { email: 'katz_eye@example.com' },
    update: {},
    create: {
      name: 'Organizer',
      email: 'katz_eye@example.com',
      password: 'password',
      role: 'ORGANIZER',
      referralCode: 'REF123',
    },
  });

  const venue = await prisma.venue.upsert({
    where: { name: 'Jakarta Convention Center' },
    update: {},
    create: {
      name: 'Jakarta Convention Center',
      address: 'Jl. Jend. Sudirman, Jakarta Selatan, Indonesia',
      city: 'Jakarta',
      capacity: 2000,
      contactInfo: '123-456-7890',
    },
  });

  const javaJazz = await prisma.event.create({
    data: {
      title: 'Java Jazz',
      description: 'A music festival for Java developers',
      category: 'Music',
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      venueId: venue.id,
      organizerId: organizer.id,
    },
  });

  const reactConf = await prisma.event.create({
    data: {
      title: 'React Conf',
      description: 'A conference for React developers',
      category: 'Technology',
      date: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
      venueId: venue.id,
      organizerId: organizer.id,
    },
  });

  const angularSummit = await prisma.event.create({
    data: {
      title: 'Angular Summit',
      description: 'A conference for Angular developers',
      category: 'Technology',
      date: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000),
      venueId: venue.id,
      organizerId: organizer.id,
    },
  });

  console.log('Java Jazz ID:', javaJazz.id);
  console.log('React Conf ID:', reactConf.id);
  console.log('Angular Summit ID:', angularSummit.id);
}

main()
  .then(() => {
    console.log('✅ Successfully seeded database');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
