import mongoose from 'mongoose';
import {AppConfigs} from './app';

export const connectDB = async () => {
  return mongoose.connect(
    AppConfigs.IS_DEV ? AppConfigs.DATABASE_URL : AppConfigs.DATABASE_URL_PROD,
  );
};
