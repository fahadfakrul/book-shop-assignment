import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post('/orders', OrderControllers.createOrder);
router.get('/orders/revenue', OrderControllers.calculateRevenue);

export const OrderRoutes = router;
