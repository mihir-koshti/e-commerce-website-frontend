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
          <Col lg={6} className="hero-left">
            <div>
              <h2 className="fs-24">NEW ARRIVALS ONLY</h2>
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
          <Col lg={6} className="Banner-image">
            <img src={hero_image} alt=""  height={700}/>
          </Col>
        </Row>
        </Container>
      </div>
    </HeroStyled>
  );
};

export default Hero;
