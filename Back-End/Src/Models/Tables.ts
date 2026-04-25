import mongoose from "mongoose";

const TablesSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      require: true,
    },
    qrData: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

export const TablesModel = mongoose.model("Tables", TablesSchema);
