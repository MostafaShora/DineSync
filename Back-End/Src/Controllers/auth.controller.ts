import type { NextFunction, Request, Response } from "express";
import { AppError } from "../MiddleWares/errorHandler.ts";
import { comparePassword, hashPassword } from "../Utils/hashPassword.ts";
import { generateAccessToken } from "../Utils/generateToken.ts";
import User from "../Models/user.model.ts";

// @access  Public
// @desc    Register new user
// @route   POST /api/auth/register
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(new AppError("Email already exists", 400));
    }

    // Hash password
    const hashed = await hashPassword(password);

    // Create user
    const user = await User.create({ name, email, password: hashed });

    // Generate token
    const token = generateAccessToken(user._id.toString(), user.role);

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return next(new AppError("Invalid email or password", 401));
    }

    // Check if banned
    if (user.isBanned) {
      return next(new AppError("Your account has been banned", 403));
    }

    // Check password
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return next(new AppError("Invalid email or password", 401));
    }

    // Generate token
    const token = generateAccessToken(user._id.toString(), user.role);

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Logout user
// @route   POST /api/auth/logout
// @access  Private
export const logout = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const user = await User.findById(req.user?._id).select("-password");
    if (!user) {
      return next(new AppError("User not found", 404));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};
