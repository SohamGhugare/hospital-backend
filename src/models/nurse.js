import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createNurse = async (data) => {
  return prisma.nurse.create({ data });
};

const getNurseById = async (id) => {
  return prisma.nurse.findUnique({ where: { id } });
};

export { createNurse, getNurseById };
