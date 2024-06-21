import React from "react";
import { OffersStyled } from "./OffersStyled";
import { Button, Col, Container, Row } from "react-bootstrap";
import exclusive_image from '../../assets/exclusive_image.png';
const Offers = () => {
  return (
    <OffersStyled>
      <div className="offers">
        <Container>
        <Row>
          <Col lg={6} md={6} className="offer-cloumn-1">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <Button className="offer-btn">Check Now</Button>
          </Col>
          <Col className="offer-cloumn-2" lg={6} md={6}>
            <img className="offer-img" src={exclusive_image} alt="" height={400}/>
          </Col>
        </Row>
      </Container>
      </div>
    </OffersStyled>
  );
};

export default Offers;
