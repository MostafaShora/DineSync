import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.model";
import { AppError } from "./errorHandler";

export const protect = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // 1. Check if token exists
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return next(new AppError("Not authorized, no token", 401));
    }

    // 2. Extract token
    const token = authHeader.split(" ")[1];

    // 3. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string; role: string };

    // 4. Find user in DB
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return next(new AppError("User no longer exists", 401));
    }

    // 5. Check if user is banned
    if (user.isBanned) {
      return next(new AppError("Your account has been banned", 403));
    }

    // 6. Attach user to request
    req.user = user as any;
    next();
  } catch (error) {
    next(error);
  }
};
