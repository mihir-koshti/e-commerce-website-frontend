import React, { useEffect, useState } from "react";
import data_product from "../../assets/data";
import { PopularStyled } from "./PopularStyled";
import ItemCard from "../ItemCard";
import { Col, Container, Row } from "react-bootstrap";

const Popular = () => {
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    setPopularItems(data_product);
  }, []);
  return (
    <PopularStyled>
      <Container>
        <div className="popular">
          <h1 className="text-center">POPULAR IN WOMEN</h1>
          <hr />
          <div className="popular-items">
            <Row>
              {popularItems.length > 0 &&
                popularItems.map((item) => {
                  return (
                    <Col lg={3} md={6} sm={6}>
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
      </Container>
    </PopularStyled>
  );
};

export default Popular;
