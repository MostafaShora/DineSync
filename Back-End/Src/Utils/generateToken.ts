import jwt from "jsonwebtoken";
import type { SignOptions } from "jsonwebtoken";
export const generateAccessToken = (id: string, role: string): string => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }

  const expiresIn = process.env.JWT_EXPIRES_IN || "7d";

  return jwt.sign({ id, role }, secret, { expiresIn } as SignOptions);
};
