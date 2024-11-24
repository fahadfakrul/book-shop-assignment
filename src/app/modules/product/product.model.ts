import { Schema, model } from 'mongoose';
import { Product } from './product.interface';

const productSchema = new Schema<Product>(
  {
    title: { type: String, required: [true, 'Title is required'] },
    author: { type: String, required: [true, 'Author is required'] },
    price: { type: Number, required: true, min: 0 },
    category: {
      type: String,
      enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
      required: [true, 'Category is required'],
    },
    description: { type: String },
    quantity: {
      type: Number,
      required: [true, 'quantity is required'],
      min: 0,
    },
    inStock: { type: Boolean, required: [true, 'inStock status is required'] },
  },
  { timestamps: true },
);

export const Book = model<Product>('Book', productSchema);
