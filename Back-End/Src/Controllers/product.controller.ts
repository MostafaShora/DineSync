import { Request, Response } from "express";
import Product from "../Models/product.model";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10, categoryId, minPrice, maxPrice, search } = req.query;

    const query: any = {};
    if (categoryId) query.categoryId = categoryId;
    if (minPrice || maxPrice) query.price = { $gte: Number(minPrice) || 0, $lte: Number(maxPrice) || Infinity };
    if (search) query.name = { $regex: search, $options: "i" };

    const products = await Product.find(query)
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Error fetching products" });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Error fetching product" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: "Error creating product" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: "Error updating product" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(400).json({ error: "Error deleting product" });
  }
};
