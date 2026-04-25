import { Request, Response, NextFunction } from "express";
import { AppError } from "../middleware/errorHandler";

export const validateRegister = (req: Request, res: Response, next: NextFunction): void => {
  const { name, email, password } = req.body;

  // Name
  if (!name || name.trim() === "") {
    return next(new AppError("Name is required", 400));
  }
  if (name.trim().length < 3) {
    return next(new AppError("Name must be at least 3 characters", 400));
  }

  // Email
  if (!email || email.trim() === "") {
    return next(new AppError("Email is required", 400));
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return next(new AppError("Invalid email format", 400));
  }

  // Password
  if (!password || password.trim() === "") {
    return next(new AppError("Password is required", 400));
  }
  if (password.length < 6) {
    return next(new AppError("Password must be at least 6 characters", 400));
  }
  if (!/[A-Z]/.test(password)) {
    return next(new AppError("Password must contain at least one uppercase letter", 400));
  }
  if (!/[0-9]/.test(password)) {
    return next(new AppError("Password must contain at least one number", 400));
  }

  next();
};

export const validateLogin = (req: Request, res: Response, next: NextFunction): void => {
  const { email, password } = req.body;

  if (!email || email.trim() === "") {
    return next(new AppError("Email is required", 400));
  }
  if (!password || password.trim() === "") {
    return next(new AppError("Password is required", 400));
  }

  next();
};
