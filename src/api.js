import express, { json } from 'express';
const app = express();

import cors from 'cors';
import doctorsRouter from './routes/doctors.js';
import patientsRouter from './routes/patients.js';
import nursesRouter from './routes/nurses.js';


app.use(json());
app.use(cors());

app.use('/doctors', doctorsRouter);
app.use('/patients', patientsRouter);
app.use('/nurses', nursesRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
