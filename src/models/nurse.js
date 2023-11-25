import mongoose from 'mongoose';

const nurseSchema = new mongoose.Schema({
  name: String,
});

export {nurseSchema};