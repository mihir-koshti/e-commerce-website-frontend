import React from "react";
import { CartStyled } from "./CartStyled";
import { Container } from "react-bootstrap";
import CartItems from "../../components/CartItems";

const Cart = () => {
  return (
    <CartStyled>
      <Container>
        <div className="my-5">
          <h4>Cart</h4>
          <div>
            <CartItems />
          </div>
        </div>
      </Container>
    </CartStyled>
  );
};

export default Cart;
