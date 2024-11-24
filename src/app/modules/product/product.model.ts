import { Schema, model } from 'mongoose';
import { Product } from './product.interface';

const productSchema = new Schema<Product>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: {
      type: String,
      enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
      required: true,
    },
    description: { type: String },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export const Book = model<Product>('Book', productSchema);
