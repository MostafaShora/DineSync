import { Router } from "express";
import {
  validateLogin,
  validateRegister,
} from "../Validators/auth.validators.ts";
import { protect } from "../MiddleWares/protect.ts";
import {
  getMe,
  login,
  logout,
  register,
} from "../Controllers/auth.controller.ts";

const router = Router();

// Public Routes
router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);

// Private Routes
router.post("/logout", protect, logout);
router.get("/me", protect, getMe);

export default router;
