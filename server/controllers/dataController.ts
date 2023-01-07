import { Request, Response } from 'express';
import products from '../data/products';
import users from '../data/users';
import Order from '../models/orderModel';
import Product from '../models/productModel';
import User from '../models/userModel';

class DataController {
  async destroyData(req: Request, res: Response) {
    try {
      await Order.deleteMany();
      await Product.deleteMany();
      await User.deleteMany();

      console.log('Data destroyd'.red.inverse);
      res.json({ message: 'Data destroyd' });
      process.exit();
    } catch (error) {
      console.error(`${error}`.red.inverse);
      process.exit(1);
    }
  }

  async importData(req: Request, res: Response) {
    try {
      await Order.deleteMany();
      await Product.deleteMany();
      await User.deleteMany();

      const createdUsers = await User.insertMany(users);

      const adminUser = createdUsers[0]._id;

      const sampleProduct = products.map((product: any) => {
        return { ...product, user: adminUser };
      });

      await Product.insertMany(sampleProduct);

      console.log('Data imported'.green.inverse);
      res.json({ message: 'Data imported' });
      process.exit();
    } catch (error) {
      console.error(`${error}`.red.inverse);
      process.exit(1);
    }
  }
}

export default DataController;
