import React from "react";
import {
  Button,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Rating from "../components/Rating";
import product from "../products";
import { IProduct } from "../types/IProduct";

const ProductScreen = () => {
  const { id } = useParams();
  const currentProduct = product.find((item) => item._id === id) as IProduct;
  console.log("Current product:", currentProduct);
  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={currentProduct.image} alt={currentProduct.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{currentProduct.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={currentProduct.rating}
                text={`${currentProduct.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${currentProduct.price}</ListGroup.Item>
            <ListGroup.Item>
              Description: ${currentProduct.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${currentProduct.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {currentProduct.countInStock > 0
                    ? "In Stack"
                    : "Out Of Stack"}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                disabled={currentProduct.countInStock === 0}
                className="btn-block"
                type="button"
              >
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
