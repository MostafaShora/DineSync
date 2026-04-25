import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./Src/Configs/DB.ts";

const app = express();
app.use(express.json());
dotenv.config();
ConnectDB();

app.listen(4000, () => {
  console.log("Server is on port 4000....");
});
