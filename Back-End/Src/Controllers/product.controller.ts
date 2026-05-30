import type { Request, Response } from "express";
import productModel from "../Models/product.model.ts";
import CategoryModel from "../Models/category.model.ts";


// GET ALL PRODUCTS
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const {
      page = "1",
      limit = "10",
      categoryId,
      minPrice,
      maxPrice,
      search,
    } = req.query;

    const pageNum = Number(page);
    const limitNum = Number(limit);

    const query: any = {};

    if (categoryId) query.categoryId = categoryId;

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    const products = await productModel
      .find(query)
      .populate("categoryId", "name")
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum);

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Error fetching products" });
  }
};

// GET BY ID
export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await productModel
      .findById(req.params.id)
      .populate("categoryId");

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch {
    res.status(500).json({ error: "Error fetching product" });
  }
};

// CREATE
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, image, description, categoryId, isAvailable } =
      req.body;

    const categoryExists = await CategoryModel.findById(categoryId);

    if (!categoryExists) {
      return res.status(400).json({ error: "Invalid category" });
    }

    const product = await productModel.create({
      name,
      price,
      image,
      description,
      categoryId,
      isAvailable,
    });

    res.status(201).json(product);
  } catch {
    res.status(400).json({ error: "Error creating product" });
  }
};

// UPDATE
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch {
    res.status(400).json({ error: "Error updating product" });
  }
};

// DELETE
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await productModel.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product deleted" });
  } catch {
    res.status(400).json({ error: "Error deleting product" });
  }
};
