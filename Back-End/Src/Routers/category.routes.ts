import { Router } from "express";
import {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory,
} from "../Controllers/category.controller";
import { protect, adminOnly } from "../MiddleWares/auth.middleware";

const router = Router();

router.get("/", getCategories);
router.post("/", protect, adminOnly, createCategory);
router.put("/:id", protect, adminOnly, updateCategory);
router.delete("/:id", protect, adminOnly, deleteCategory);

export default router;
