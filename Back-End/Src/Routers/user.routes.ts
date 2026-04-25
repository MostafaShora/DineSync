import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  updateUserRole,
  banUser,
  deleteUser,
} from "../controllers/user.controller";
import { protect } from "../middleware/protect";
import { adminOnly } from "../middleware/adminOnly";
import { validateUpdateRole } from "../validations/user.validation";

const router = Router();

// All routes below are Private + Admin Only
router.use(protect, adminOnly);

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id/role", validateUpdateRole, updateUserRole);
router.put("/:id/ban", banUser);
router.delete("/:id", deleteUser);

export default router;
