import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const ValidationMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = errors.array().map((err) => ({
    field: err.type,
    message: err.msg,
  }));
  return res.status(400).json({
    status: "field",
    errors: extractedErrors,
  });
};
