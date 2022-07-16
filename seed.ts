import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Dan",
      posts: {
        create: [{ content: "GraphQL Berlin" }],
      },
    },
  });

  console.log("Done!");
}

main();
