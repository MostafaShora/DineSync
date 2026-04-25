import jwt, { SignOptions } from "jsonwebtoken";

export const generateAccessToken = (id: string, role: string): string => {
  const secret = process.env.JWT_SECRET as string;
  const expiresIn = (process.env.JWT_EXPIRES_IN || "7d") as SignOptions["expiresIn"];

  return jwt.sign({ id, role }, secret, { expiresIn });
};
