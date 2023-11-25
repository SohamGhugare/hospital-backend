import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: String,
  speciality: String,
  yearsOfExperience: Number,
});

export {doctorSchema};