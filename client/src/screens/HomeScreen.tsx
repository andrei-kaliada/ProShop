import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { $apiAxios } from "../api";
import Product from "../components/Product";
import { IProduct } from "../types/IProduct";

export const HomeScreen = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    $apiAxios
      .get("/product")
      .then((response) => {
        console.log("Response:", response);
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
