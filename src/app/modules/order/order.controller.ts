import { Request, Response } from 'express';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const { email, product, quantity, totalPrice } = req.body;
    const order = await OrderServices.createOrderService({
      email,
      product,
      quantity,
      totalPrice,
    });
    res.status(200).json({
      message: 'Order created successfully',
      status: true,
      data: order.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const OrderControllers = {
  createOrder,
};
