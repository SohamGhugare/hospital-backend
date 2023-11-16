import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createDoctor = async (data) => {
  return prisma.doctor.create({ data });
};

const getDoctorById = async (id) => {
  return prisma.doctor.findUnique({ where: { id } });
};

export { createDoctor, getDoctorById };
