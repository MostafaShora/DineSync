import type { Request, Response } from "express";
import CategoryModel from "../Models/category.model.ts";


// CREATE
export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await CategoryModel.create(req.body);
    res.status(201).json(category);
  } catch {
    res.status(400).json({ error: "Error creating category" });
  }
};

// GET ALL
export const getCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await CategoryModel.find();
    res.json(categories);
  } catch {
    res.status(500).json({ error: "Error fetching categories" });
  }
};

// UPDATE
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const category = await CategoryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(category);
  } catch {
    res.status(400).json({ error: "Error updating category" });
  }
};

// DELETE
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const category = await CategoryModel.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json({ message: "Category deleted" });
  } catch {
    res.status(400).json({ error: "Error deleting category" });
  }
};
