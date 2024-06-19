import React from "react";
import { RelatedProductsStyled } from "./RelatedProductsStyled";
import { Col, Row } from "react-bootstrap";
import ItemCard from "../ItemCard";
import data_product from "../../assets/data";

const RelatedProducts = () => {
  return (
    <RelatedProductsStyled>
      <div className="related-products">
        <h1 className="text-center">Related Products</h1>
        <hr/>
        <div className="Related-product">
            <Row>
              {data_product.length > 0 &&
                data_product.map((item) => {
                  return (
                    <Col lg={3}>
                      <ItemCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                      />
                    </Col>
                  );
                })}
            </Row>
          </div>
      </div>
    </RelatedProductsStyled>
  );
};

export default RelatedProducts;
