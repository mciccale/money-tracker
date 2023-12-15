import mongoose from 'mongoose';
import config from './config';

const dbConnect = async () => {
  if (!config.MONGODB_URI) throw Error('Specify a valid MongoDB URI');

  mongoose.set('strictQuery', false);

  try {
    await mongoose.connect(config.MONGODB_URI);
    console.info('connected to MongoDB');
  } catch (e) {
    console.error('error connecting to MongoDB:', e);
  }
};

export { dbConnect };
