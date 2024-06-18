import React from "react";
import NavbarCom from "../Navbar";
import { LayoutStyled } from "./LayoutStyled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "../../pages/shops";
import Footer from "../Footer";
import ShopCategory from "../../pages/shopCategory";
import men_banner from '../../assets/banner_mens.png';
import women_banner from '../../assets/banner_women.png';
import kids_banner from '../../assets/banner_kids.png';
import LoginSignup from "../../pages/loginSignup";
import Product from "../../pages/product";
import Cart from "../../pages/cart";

const Layout = () => {
  return (
    <LayoutStyled>
      <div>

        <BrowserRouter>
        <NavbarCom />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/men" element={<ShopCategory category='men' banner={men_banner}/>} />
            <Route path="/women" element={<ShopCategory category='women' banner={women_banner}/>} />
            <Route path="/kids" element={<ShopCategory category='kid' banner={kids_banner}/>} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/product" element={<Product />} >
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            
          </Routes>
        <Footer />
        </BrowserRouter>
      </div>
    </LayoutStyled>
  );
};

export default Layout;
