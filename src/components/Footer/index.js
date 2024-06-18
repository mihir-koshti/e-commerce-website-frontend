import React from "react";
import { FooterStyled } from "./FooterStyled";
import footer_logo from "../../assets/logo_big.png";
import { Col, Container, Row } from "react-bootstrap";
import insta_logo from "../../assets/instagram_icon.png";
import pinInterest_logo from "../../assets/pintester_icon.png";
import wattsapp_logo from "../../assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <div className="footer">
        <hr className="footer-hr"/>
          <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p className="Brand-Name">SHOPPER</p>
          </div>
          <div className="my-5">
            <Row className="footer-links fw-700 w-50 d-inline-flex">
              <Col>Company</Col>
              <Col>Products</Col>
              <Col>Offices</Col>
              <Col>About</Col>
              <Col>Contact</Col>
            </Row>
          </div>
          <div className="my-5">
            <Row className="footer-links w-30 d-inline-flex">
              <Col>
                <div className="footer-social-icon-container">
                  <img src={insta_logo} alt="" />
                </div>
              </Col>
              <Col>
                <div className="footer-social-icon-container">
                  <img src={pinInterest_logo} alt="" />
                </div>
              </Col>
              <Col>
                <div className="footer-social-icon-container">
                  <img src={wattsapp_logo} alt="" />
                </div>
              </Col>
            </Row>
          </div>
          <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved</p>
          </div>
          {/* </div> */}
        </div>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
