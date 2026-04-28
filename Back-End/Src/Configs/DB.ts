import mongoose from "mongoose";
import { AppError } from "../MiddleWares/errorHandler.ts";

export const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.URL_DB!);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    throw new AppError("Database connection failed", 500);
  }
};
