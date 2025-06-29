import { PrismaClient } from "../lib/generated/prisma";
export const db = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

// const globalForPrisma = globalThis;

// const prisma = globalForPrisma.prisma || new PrismaClient();
// const db = globalForPrisma.db || prisma;

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = prisma;
// }

// export default prisma;
// export { db };
