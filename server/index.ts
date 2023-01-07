import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import colors from 'colors';
import router from './routes';
import { errorHandler, notFound } from './middleware/errorHandler';

const app = express();
app.use(cors());
dotenv.config();
colors.enable();

const PORT = process.env.PORT || 4301;
app.use('/api', router);
app.use(notFound);
app.use(errorHandler);

const start = () => {
  connectDB();

  app.listen(PORT, () => {
    console.log(
      `Server in ${process.env.DOT_ENV} mode started on the ${PORT} port`.yellow
        .bold
    );
  });
};

start();
