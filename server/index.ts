import express from "express";
import product from "./data/products";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import colors from "colors";

const app = express();
app.use(cors());
dotenv.config();
colors.enable();

const PORT = process.env.PORT || 4301;

app.get("/api/product", (req: any, res: any) => {
  return res.json(product);
});

app.get("/api/product/:id", (req: any, res: any) => {
  const id = req.params.id;
  const singleProduct = product.find((p: any) => p._id === id);
  return res.json(singleProduct);
});

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
