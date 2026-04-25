import { Request, Response } from "express";
import Review from "../Models/review.model";

export const addReview = async (req: Request, res: Response) => {
  try {
    const review = new Review({
      ...req.body,
      userId: req.user.id, // من الـ Auth middleware
      productId: req.params.productId
    });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: "Error adding review" });
  }
};

export const getProductReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.find({ productId: req.params.productId }).populate("userId", "name");
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Error fetching reviews" });
  }
};
