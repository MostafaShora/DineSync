import express from "express";
import cors from "cors";
import { errorHandler, notFound } from "./MiddleWares/errorHandler.ts";
import authRoutes from "./Routers/auth.routes.ts";
import userRouter from "./Routers/user.routes.ts";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  }),
);

app.use(express.json());

//routers
app.use("/api/auth", authRoutes);
app.use("/api/user", userRouter);
// 404 handler
app.use(notFound);

// global error handler
app.use(errorHandler);

export default app;
