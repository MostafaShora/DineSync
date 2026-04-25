import { Request, Response, NextFunction } from "express";
import { AppError } from "./errorHandler";

export const adminOnly = (req: Request, res: Response, next: NextFunction): void => {
  if (!req.user || req.user.role !== "admin") {
    return next(new AppError("Access denied, admins only", 403));
  }
  next();
};
