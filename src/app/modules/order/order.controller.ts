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
    res.send({
      success: false,
      message: 'Order cannot be created successfully',
      err,
    });
  }
};

const calculateRevenue = async (_req: Request, res: Response) => {
  try {
    const totalRevenue = await OrderServices.calculateRevenueService();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: { totalRevenue },
    });
  } catch (err) {
    res.send({
      success: false,
      message: 'Revenue cannot be calculated successfully',
      err,
    });
  }
};

export const OrderControllers = {
  createOrder,
  calculateRevenue,
};
