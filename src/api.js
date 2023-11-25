import express, { json } from 'express';
import mongoose from 'mongoose';
const app = express();

import cors from 'cors';

import { doctorSchema } from './models/doctor.js';
import { nurseSchema } from './models/nurse.js';
import { patientSchema } from './models/patient.js';

// mongo connection
mongoose.connect('mongodb+srv://soham:soham@personal.8p8hqfu.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Doctor = mongoose.model('Doctor', doctorSchema);
const Nurse = mongoose.model('Nurse', nurseSchema);
const Patient = mongoose.model('Patient', patientSchema);

app.use(json());
app.use(cors());

// routes
app.post('/doctors', async (req, res) => {
  try {
    const { name, speciality, yearsOfExperience } = req.body;
    const doctor = new Doctor({ name, speciality, yearsOfExperience });
    await doctor.save();
    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/nurses', async (req, res) => {
  try {
    const { name } = req.body;
    const nurse = new Nurse({ name });
    await nurse.save();
    res.status(201).json(nurse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/nurses', async (req, res) => {
  try {
    const nurses = await Nurse.find();
    res.json(nurses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/patients', async (req, res) => {
  try {
    const { name, doctorId, nurseId, disease, medication } = req.body;
    const patient = new Patient({ name, doctorId, nurseId, disease, medication });
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
