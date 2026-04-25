import { Request, Response, NextFunction } from "express";

// Custom Error Class
export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Not Found Handler (404)
export const notFound = (req: Request, res: Response, next: NextFunction): void => {
  next(new AppError(`❌ Route not found: ${req.originalUrl}`, 404));
};

// Global Error Handler
export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Mongoose: ID غلط
  if (err.name === "CastError") {
    statusCode = 400;
    message = "Invalid ID format";
  }

  // Mongoose: قيمة متكررة (email موجود)
  if (err.name === "MongoServerError" && (err as any).code === 11000) {
    statusCode = 400;
    message = "Email already exists";
  }

  // JWT: توكن غلط
  if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "Invalid token, please login again";
  }

  // JWT: توكن انتهت صلاحيته
  if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "Token expired, please login again";
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
