import type { NextFunction, Request, Response } from "express";
import { AppError } from "./errorHandler.ts";
import User from "../Models/user.model.ts";
import jwt from "jsonwebtoken";

export interface JwtPayload {
  id: string;
  role: string;
}

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    // 1. Check if token exists
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return next(new AppError("Not authorized, no token", 401));
    }

    // 2. Extract token
    const token = authHeader.split(" ")[1];

    if (!token) {
      return next(new AppError("Not authorized, no token", 401));
    }

    // 3. Check secret
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error("JWT_SECRET is not defined");
    }

    // 4. Verify token
    const decoded = jwt.verify(token, secret) as JwtPayload;

    // 5. Find user in DB
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return next(new AppError("User no longer exists", 401));
    }

    // 6. Check if user is banned
    if (user.isBanned) {
      return next(new AppError("Your account has been banned", 403));
    }

    // 7. Attach user to request
    req.user = user as any;

    next();
  } catch (error) {
    next(error);
  }
};
