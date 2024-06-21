import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import cart_logo from "../../assets/cart_icon.png";
// import Button from "../Button";
import { NavbarStyled } from "./navbarStyled";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import { Container, Nav, NavbarBrand } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
const NavbarCom = () => {
  const [selectNav, setSelectedNav] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setSelectedNav(location.pathname);
  }, [location]);

  return (
    <NavbarStyled>
      <Navbar expand="lg" collapseOnSelect className="bg-body-tertiary">
        <Container>
          <NavbarBrand>
            <img className="nav-logo" src={logo} alt="Logo" />
          </NavbarBrand>
          <p className="Brand-Name">SHOPPER</p>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="py-4">
            <Nav
              className="m-auto my-2 my-lg-0 fw-700"
              // style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <NavLink to={'/'}> Shop</NavLink> */}
              <Nav.Link
                as={NavLink}
                to={"/"}
                className={`fs-24 mx-4 ${
                  selectNav === "/" ? "selectedTab" : ""
                }`}
                eventKey={"/"}
              >
                Shop
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to={"/men"}
                className={`fs-24 mx-4 ${
                  selectNav === "/men" ? "selectedTab" : ""
                }`}
                eventKey={"/men"}
              >
                Men
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to={"/women"}
                className={`fs-24 mx-4 ${
                  selectNav === "/women" ? "selectedTab" : ""
                }`}
                eventKey={"/women"}
              >
                Women
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to={"/kids"}
                className={`fs-24 mx-4 ${
                  selectNav === "/kids" ? "selectedTab" : ""
                }`}
                eventKey={"/kids"}
              >
                Kids
              </Nav.Link>{" "}
            </Nav>

            <div className="d-flex align-items-center">
              <div className="mx-4">
                <Button className={"loginBtn fw-500"}> Login</Button>
              </div>
              <div>
                <Link to="/cart">
                  <img src={cart_logo} alt="" width={30} />
                </Link>
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
