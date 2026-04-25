import { Router } from "express";
import { addReview, getProductReviews } from "../Controllers/review.controller";
import { protect } from "../middlewares/auth.middleware";

const router = Router();

router.post("/:productId", protect, addReview);
router.get("/:productId", getProductReviews);

export default router;
