import { Product } from './product.interface';
import { Book } from './product.model';

const createProductIntoDB = async (product: Product) => {
  const result = await Book.create(product);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Book.find();
  return result;
};
const getAProductFromDB = async (id: string) => {
  const result = await Book.findOne({ _id: id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getAProductFromDB,
};
