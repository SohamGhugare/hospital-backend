import { Router } from 'express';
const router = Router();
import { createPatient, getPatientById } from '../models/patient.js';

router.post('/', async (req, res) => {
  try {
    const patient = await createPatient(req.body);
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const patient = await getPatientById(Number(req.params.id));
    if (patient) {
      res.json(patient);
    } else {
      res.status(404).json({ error: 'Patient not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;

