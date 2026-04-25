import { Request, Response, NextFunction } from "express";
import { AppError } from "./errorHandler";
import { UserRole } from "../types/user.types";

export const allowRoles = (...roles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user || !roles.includes(req.user.role as UserRole)) {
      return next(new AppError(`Access denied, allowed roles: ${roles.join(", ")}`, 403));
    }
    next();
  };
};
