import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //create user
  const user = await prisma.user.create({
    data: {
      email: "user@gmail.com",
      password: "1234",
      name: "FirstName LastName",
    },
  });

  //create dummy invoices
  const invoice1 = await prisma.invoice.create({
    data: {
      vendor_name: "Amazon",
      description: "Rental",
      due_date: new Date("2023-10-31T00:00:00Z"),
      amount: 228.75,
      paid: true,
      user_id: 1,
    },
  });
}
