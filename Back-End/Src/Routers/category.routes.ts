import { Router } from "express";
import { createCategory, deleteCategory, getCategories, updateCategory } from "../Controllers/category.controller.ts";
import { adminOnly } from "../MiddleWares/adminOnly.ts";
import { protect } from "../MiddleWares/protect.ts";


const router = Router();

router.get("/", getCategories);
router.post("/", protect, adminOnly, createCategory);
router.put("/:id", protect, adminOnly, updateCategory);
router.delete("/:id", protect, adminOnly, deleteCategory);

export default router;
