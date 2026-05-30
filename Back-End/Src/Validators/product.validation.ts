import z from "zod";

export const productSchema = z.object({
  name: z.string().min(3, "Product name must be at least 3 chars"),
  price: z.number().positive("Price must be positive"),
  description: z.string().optional(),
  image: z.string().url("Image must be a valid URL").optional(),
  isAvailable: z.boolean().default(true),
  categoryId: z.string(),
});
