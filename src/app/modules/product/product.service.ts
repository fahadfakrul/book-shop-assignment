import { Product } from './product.interface';
import { Book } from './product.model';

const createProductIntoDB = async (product: Product) => {
  const result = await Book.create(product);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
};
