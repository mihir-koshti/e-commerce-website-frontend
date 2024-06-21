import React from "react";
import { HeroStyled } from "./HeroStyled";
import { Col, Container, Row } from "react-bootstrap";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow.png";
import hero_image from "../../assets/hero_image.png";
const Hero = () => {
  return (
    <HeroStyled>
      <div className="hero">
        <Container>
        <Row>
          <Col lg={6} md={6} sm={6} xs={12} className="hero-left">
            <div className="banner-1">
              <h2 className="Text">NEW ARRIVALS ONLY</h2>
              <div className="fs-48 Banner-text">
                <div className="hand-icon">
                  <div>new&nbsp;</div>
                  <img src={hand_icon} alt="" />
                </div>
                <div>collections</div>
                <div>for everyone</div>
              </div>
              <div className="hero-latest-btn">
                <div>Latest Collections &nbsp;</div>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12} className="Banner-image">
            <img className="hero-Image" src={hero_image} alt="" height={700}/>
          </Col>
        </Row>
        </Container>
      </div>
    </HeroStyled>
  );
};

export default Hero;
