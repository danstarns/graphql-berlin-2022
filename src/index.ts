import { createServer } from "@graphql-yoga/node";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const server = createServer({
  schema: {
    typeDefs: /* GraphQL */ `
      type Query {
        users: [User]
      }

      type User {
        name: String
        posts: [Post]
      }

      type Post {
        content: String
      }
    `,
    resolvers: {
      Query: {
        users: async () => {
          const users = await prisma.user.findMany();

          return users;
        },
      },
    },
  },
});

server.start();
