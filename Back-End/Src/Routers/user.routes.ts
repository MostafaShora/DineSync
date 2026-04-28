import { Router } from "express";
import { protect } from "../MiddleWares/protect.ts";
import { getMe, updateMe } from "../Controllers/user.controller.ts";

const router = Router();

// 👇 logged-in user only
router.get("/me", protect, getMe);
router.put("/me", protect, updateMe);

export default router;
