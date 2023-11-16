import express, { json } from 'express';
const app = express();
import doctorsRouter from './routes/doctors.js';
import patientsRouter from './routes/patients.js';

app.use(json());

app.use('/doctors', doctorsRouter);
app.use('/patients', patientsRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
