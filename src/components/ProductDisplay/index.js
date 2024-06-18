import React from "react";
import { ProductDisplayStyled } from "./ProductDisplayStyled";
import { Button, Col, Row } from "react-bootstrap";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
const ProductDisplay = ({ product }) => {
  return (
    <ProductDisplayStyled>
      <div>
        <Row>
          <Col xl={7} lg={7} md={8}>
            <Row>
              <Col lg={3} xl={3}>
                <Col>
                  <img className="image" src={product.image} alt="" />
                </Col>
                <Col>
                  <img className="image" src={product.image} alt="" />
                </Col>
                <Col>
                  <img className="image" src={product.image} alt="" />
                </Col>
                <Col>
                  <img className="image" src={product.image} alt="" />
                </Col>
              </Col>
              <Col lg={9} xl={9}>
                <img className="imageMain" src={product.image} alt="" />
              </Col>
            </Row>
          </Col>
          <Col md={4} lg={5} xl={5}>
            <div>
              <h1 className="product-name">{product.name}</h1>
              <div className="star-rating">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p className="m-0">(22)</p>
              </div>
              <div className="prices-class">
                <div className="old-price">${product.old_price}</div>
                <div className="new-price">${product.new_price}</div>
              </div>
              <div className="product-description">
                Discover ultimate comfort and effortless style with our
                Essential Tee. Crafted from soft, breathable fabric, this
                T-shirt is designed to be a versatile staple in your wardrobe.
                
              </div>
              <div className="product-sizes my-4">
                <h4>Select Sizes</h4>
                <div className="product-size-main">
                  <div>S</div>
                  <div>M</div>
                  <div>L</div>
                  <div>XL</div>
                  <div>XXL</div>
                </div>
              </div>
              <Button className="cart-btn my-3">ADD TO CART</Button>

              <div className="category">
                <span>Category: </span>
                {product.category}, T-shirt, Crop Tops
              </div>
              <div className="category">
                <span>Tags:</span> Modern, Latest{" "}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </ProductDisplayStyled>
  );
};

export default ProductDisplay;
