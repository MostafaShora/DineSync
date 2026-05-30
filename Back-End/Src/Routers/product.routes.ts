import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../Controllers/product.controller.ts";
import { adminOnly } from "../MiddleWares/adminOnly.ts";
import { protect } from "../MiddleWares/protect.ts";


const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", protect, adminOnly, createProduct);
router.put("/:id", protect, adminOnly, updateProduct);
router.delete("/:id", protect, adminOnly, deleteProduct);

export default router;
