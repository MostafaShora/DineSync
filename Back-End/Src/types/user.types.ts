export type UserRole = "user" | "admin" | "staff";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  isBanned: boolean;
  createdAt: Date;
  updatedAt: Date;
}
