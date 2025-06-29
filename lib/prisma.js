// lib/prisma.js
import { PrismaClient } from "../lib/generated/prisma"; // ✅ Custom output path

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
