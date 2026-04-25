import { Router } from "express";
import { register, login, logout, getMe } from "../controllers/auth.controller";
import { validateRegister, validateLogin } from "../validations/auth.validation";
import { protect } from "../middleware/protect";

const router = Router();

// Public Routes
router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);

// Private Routes
router.post("/logout", protect, logout);
router.get("/me", protect, getMe);

export default router;
