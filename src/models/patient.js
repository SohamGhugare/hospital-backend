import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name: String,
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  nurseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Nurse' },
  disease: String,
  medication: String,
});

export {patientSchema};