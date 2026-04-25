import { model, Schema } from "mongoose";

export interface IReview extends Document {
    rating: number;
    comment: string;
    userId: Schema.Types.ObjectId;
    productId: Schema.Types.ObjectId;
    createdAt: Date;
}

const reviewSchema = new Schema<IReview>({
    rating: { type: Number, required: true },
    comment: String,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    productId: { type: Schema.Types.ObjectId, ref: "Product" },
    createdAt: { type: Date, default: Date.now }
});

export default model<IReview>("Review", reviewSchema);
