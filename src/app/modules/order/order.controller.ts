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
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err.message || 'Order creation failed',
      error: err,
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
  } catch (err: any) {
    res.status(404).json({
      success: false,
      message: err.message || 'Revenue calculation failed',
      error: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
  calculateRevenue,
};
