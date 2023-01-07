import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import AlertMessage from '../components/AlertMessage';
import Loader from '../components/Loader';
import Product from '../components/Product';
import { useActionsCreator } from '../hooks/useAppActions';
import { useTypedSelector } from '../hooks/useAppSelector';
import { IProduct } from '../types/product/IProduct';

export const HomeScreen = () => {
  const { isLoading, product, error } = useTypedSelector(
    (state) => state.product
  );
  const { getProduct } = useActionsCreator();

  useEffect(() => {
    getProduct();
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <AlertMessage variant="danger">{error}</AlertMessage>
      </div>
    );
  }
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {product.map((product: IProduct) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
