import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/products', ProductControllers.createProduct);
router.get('/products', ProductControllers.getAllProducts);
router.get('/products/:productId', ProductControllers.getAProduct);
router.put('/products/:productId', ProductControllers.updateProduct);
export const ProductRoutes = router;
