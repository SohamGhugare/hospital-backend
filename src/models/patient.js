import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createPatient = async (data) => {
  return prisma.patient.create({ data });
};

const getPatientById = async (id) => {
  return prisma.patient.findUnique({ where: { id } });
};

export { createPatient, getPatientById };
