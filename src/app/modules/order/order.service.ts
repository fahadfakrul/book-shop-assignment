import { Book } from '../product/product.model';
import { BookOrder } from './order.model';

const createOrderService = async ({
  email,
  product,
  quantity,
  totalPrice,
}: any) => {
  const productDoc = await Book.findById(product);

  if (!productDoc) {
    return {
      success: false,
      message: 'Product not found',
      error: 'ProductNotFoundError',
    };
  }

  if (productDoc.quantity < quantity) {
    return {
      success: false,
      message: 'Insufficient stock',
      error: 'StockError',
    };
  }

  // Update inventory
  productDoc.quantity -= quantity;
  productDoc.inStock = productDoc.quantity > 0;
  await productDoc.save();

  // Create the order
  const order = await BookOrder.create({
    email,
    product,
    quantity,
    totalPrice,
  });

  return { success: true, data: order };
};

const calculateRevenueService = async () => {
  const result = await BookOrder.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);

  return result.length > 0 ? result[0].totalRevenue : 0;
};

export const OrderServices = {
  createOrderService,
  calculateRevenueService,
};
