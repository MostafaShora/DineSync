import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI!);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
  } 
};
