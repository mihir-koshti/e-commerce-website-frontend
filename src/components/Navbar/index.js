import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import cart_logo from "../../assets/cart_icon.png";
// import Button from "../Button";
import { NavbarStyled } from "./navbarStyled";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import { Container, Nav, NavbarBrand } from "react-bootstrap";
import { useLocation } from "react-router-dom";
const NavbarCom = () => {
  const [selectNav, setSelectedNav] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setSelectedNav(location.pathname);
  },[location]);

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
              {/* <NavLink to={'/'}> Shop</NavLink> */}
              <Nav.Link
              // as={Link}
                className={`fs-24 mx-4 ${
                  selectNav === "/" ? "selectedTab" : ""
                }`}
                href="/"
                eventKey={'/'}
              >
                Shop
              </Nav.Link>
              <Nav.Link
                className={`fs-24 mx-4 ${
                  selectNav === "/men" ? "selectedTab" : ""
                }`}
                href="/men"
                eventKey={'/men'}
              >
                Men
              </Nav.Link>
              <Nav.Link
                className={`fs-24 mx-4 ${
                  selectNav === "/women" ? "selectedTab" : ""
                }`}
                href="/women"
              >
                Women
              </Nav.Link>
              <Nav.Link
                className={`fs-24 mx-4 ${
                  selectNav === "/kids" ? "selectedTab" : ""
                }`}
                href="/kids"
              >
                Kids
              </Nav.Link>{" "}
            </Nav>

            <div className="d-flex align-items-center">
              <div className="mx-4">
                <Button className={"loginBtn fw-500"}> Login</Button>
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
