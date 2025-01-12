import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //create users
  const user1 = await prisma.user.upsert({
    where: { email: "batman#1@gmail.com" },
    create: {
      email: "batman#1@gmail.com",
      password: "marthaWayne",
      name: "Bruce Wayne",
    },
    update: {},
  });
  const user2 = await prisma.user.upsert({
    where: { email: "man_of_steel@gmail.com" },
    create: {
      email: "man_of_steel@gmail.com",
      password: "PaKent",
      name: "Clark Kent",
    },
    update: {},
  });

  //upsert dummy invoices
  const invoice1 = await prisma.invoice.upsert({
    where: { id: 1 },
    create: {
      vendor_name: "Amazon",
      description: "Rental",
      due_date: new Date("2023-10-31T00:00:00Z"),
      amount: 228.75,
      paid: true,
      user_id: user1.id,
    },
    update: {
      user_id: user1.id,
    },
  });
  const invoice2 = await prisma.invoice.upsert({
    where: { id: 2 },
    create: {
      vendor_name: "Sysco",
      description: "Rental",
      due_date: new Date("2023-10-31T00:00:00Z"),
      amount: 228.75,
      paid: false,
      user_id: user1.id,
    },
    update: {
      user_id: user1.id,
    },
  });
  const invoice3 = await prisma.invoice.upsert({
    where: { id: 3 },
    create: {
      vendor_name: "US Foods",
      description: "Rental",
      due_date: new Date("2023-10-31T00:00:00Z"),
      amount: 0,
      paid: true,
      user_id: user1.id,
    },
    update: { user_id: user1.id },
  });
  const invoice4 = await prisma.invoice.upsert({
    where: { id: 4 },
    create: {
      vendor_name: "Retal Inc",
      description: "Rental",
      due_date: new Date("2023-10-31T00:00:00Z"),
      amount: 0,
      paid: true,
      user_id: user2.id,
    },
    update: { user_id: user2.id },
  });

  console.log(user1, user2, invoice1, invoice2, invoice3, invoice4);
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    //close Prisma Client at the end
    await prisma.$disconnect();
  });
