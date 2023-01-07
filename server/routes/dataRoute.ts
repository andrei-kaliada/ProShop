import express from 'express';
import DataController from '../controllers/dataController';
import asyncHandler from 'express-async-handler';

const router = express.Router();

const dataController = new DataController();

router.get('/api/destroy_data', asyncHandler(dataController.destroyData));

router.get('/api/import_data', asyncHandler(dataController.importData));

export default router;
