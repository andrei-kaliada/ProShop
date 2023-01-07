import express from 'express';
import productRoute from './productRoute';
import dataRoute from './dataRoute';

const router = express.Router();

router.use('/products', productRoute);
router.use('/data', dataRoute);

export default router;
