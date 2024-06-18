import React, { useContext } from "react";
import { ShopCategoryStyled } from "./ShopCategoryStyled";
import { ShopContext } from "../../context/ShopContext";
import { Col, Container, Row } from "react-bootstrap";
import dropdown_icon from "../../assets/dropdown_icon.png";
import ItemCard from "../../components/ItemCard";
const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);
  return (
    <ShopCategoryStyled>
      <Container>
        <div className="shopCategory">
          <img className="banner-img" src={banner} alt="" />
          <Row className="my-5">
            <Col className="shopCategory-indexSort">
              <p>
                <span>Showing 1-12</span> out of 36 products
              </p>
            </Col>
            <Col style={{display: 'contents'}}>
              <div className="shopCategory-sort">
                Sort By <img src={dropdown_icon} alt="" />
              </div>
            </Col>
          </Row>
          <div className="shopCategory-products">
            <Row>
              {all_product.map((item) => {
                if (category === item.category) {
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
                } else {
                  return null;
                }
              })}
            </Row>
          </div>

          <div className="loadMore" >
            Explore More
          </div>
        </div>
      </Container>
    </ShopCategoryStyled>
  );
};

export default ShopCategory;
