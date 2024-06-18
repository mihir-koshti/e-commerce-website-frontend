import React from "react";
import logo from "../../assets/logo.png";
import cart_logo from "../../assets/cart_icon.png";
// import Button from "../Button";
import { NavbarStyled } from "./navbarStyled";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import {
  Col,
  Container,
  Nav,
  NavItem,
  NavbarBrand,
  Row,
} from "react-bootstrap";
const NavbarCom = () => {
  return (
    <NavbarStyled>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavbarBrand>
            <img src={logo} alt="Logo" />
          </NavbarBrand>
            <p className="Brand-Name">SHOPPER</p>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0 fw-700"
              // style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="fs-24 mx-4" href="/shop">Shop</Nav.Link>
              <Nav.Link className="fs-24 mx-4" href="/men">Men</Nav.Link>
              <Nav.Link className="fs-24 mx-4" href="/women">Women</Nav.Link>
              <Nav.Link className="fs-24 mx-4" href="/kids">Kids</Nav.Link>{" "}
            </Nav>

            <div className="d-flex align-items-center">
              <div className="mx-4">
                <Button className={'loginBtn fw-500'}> Login</Button>
              </div>
              <div>
                <img src={cart_logo} alt="" width={30} />
              </div>
              <div className="cart-count">0</div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavbarStyled>
  );
};

export default NavbarCom;
