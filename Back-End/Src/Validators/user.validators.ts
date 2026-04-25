import { Request, Response, NextFunction } from "express";
import { AppError } from "../middleware/errorHandler";

export const validateUpdateRole = (req: Request, res: Response, next: NextFunction): void => {
  const { role } = req.body;

  const allowedRoles = ["user", "admin", "staff"];

  if (!role || role.trim() === "") {
    return next(new AppError("Role is required", 400));
  }
  if (!allowedRoles.includes(role)) {
    return next(new AppError(`Invalid role, allowed roles: ${allowedRoles.join(", ")}`, 400));
  }

  next();
};
