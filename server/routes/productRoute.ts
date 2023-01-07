import express from 'express';
import ProductController from '../controllers/productController';

const router = express.Router();

const productController = new ProductController();

router.get('/', productController.getProduct);

router.get('/:id', productController.getProductById);

export default router;
