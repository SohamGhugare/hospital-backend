import { Router } from 'express';
const router = Router();
import { createNurse, getNurseById } from '../models/nurse.js';

router.post('/', async (req, res) => {
  try {
    const nurse = await createNurse(req.body);
    res.json(nurse);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const nurse = await getNurseById(Number(req.params.id));
    if (nurse) {
      res.json(nurse);
    } else {
      res.status(404).json({ error: 'Nurse not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;

