import { Router } from "express";
import { protect } from "../MiddleWares/protect.ts";
import { adminOnly } from "../MiddleWares/adminOnly.ts";
import {
  banUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUserRole,
} from "../Controllers/user.controller.ts";
import { validateUpdateRole } from "../Validators/user.validators.ts";

const router = Router();

// All routes below are Private + Admin Only
router.use(protect, adminOnly);

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id/role", validateUpdateRole, updateUserRole);
router.put("/:id/ban", banUser);
router.delete("/:id", deleteUser);

export default router;
