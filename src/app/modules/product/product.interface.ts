import { Schema, model, connect } from 'mongoose';

export type Product = {
  title: string;
  author: string;
  price: number;
  category: 'Fiction' | 'Science' | 'SelfDevelopment' | 'Poetry' | 'Religious';
  description?: string;
  quantity: number;
  inStock: boolean;
};