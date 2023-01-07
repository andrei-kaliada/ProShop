import { Request, Response } from 'express';
import Product from '../models/productModel';

class ProductController {
  // @descr Fetch all products
  // @route GET /api/product
  // @access Public
  async getProduct(req: Request, res: Response) {
    try {
      const product = await Product.find();
      return res.json(product);
    } catch (error) {
      return res.json({ message: error });
    }
  }

  // @descr Fetch single product by id
  // @route GET /api/product/:id
  // @access Public
  async getProductById(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const singleProduct = await Product.findById(id);
      if (singleProduct) {
        return res.json(singleProduct);
      } else {
        res.status(404);
        throw new Error('Product not founded');
      }
    } catch (error) {
      return res.json({ message: (error as Error).message });
    }
  }
}

export default ProductController;
