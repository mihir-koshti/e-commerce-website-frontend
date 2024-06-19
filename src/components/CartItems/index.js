import React, { useContext } from "react";
import { CartItemsStyled } from "./CartItemsStyled";
import { Button, Col, Row, Table } from "react-bootstrap";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../../assets/cart_cross_icon.png";
const CartItems = () => {
  const {  getTotalCartAmount, cartItems, all_product, removeFromCart } = useContext(ShopContext);

  console.log(getTotalCartAmount());
  return (
    <CartItemsStyled>
      <div className="cart-items">
        <Table responsive className="">
          <thead className=" cart-table-head">
            <tr>
              <th>Products</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="cart-table-body">
            {all_product.map((e) => {
              if (cartItems[e.id] > 0) {
                return (
                  <tr>
                    <td>
                      <img src={e?.image} alt="" height={50} />
                    </td>
                    <td className="cart-items-name">
                      <p>{e?.name}</p>
                    </td>
                    <td>${e?.new_price}</td>
                    <td>
                      <Button className="Product-quantity-btn">
                        {cartItems[e?.id]}{" "}
                      </Button>
                    </td>
                    <td>${e?.new_price * cartItems[e?.id]}</td>
                    <td>
                      <img
                        className="cart-remove-icon"
                        src={remove_icon}
                        alt=""
                        onClick={() => removeFromCart(e?.id)}
                      />
                    </td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </Table>

        <div className="cart-total-card">
          <Row>
            <Col xl={6} lg={6}>
              <h3>Cart Totals</h3>
              <div className="my-5 total-card">
                <Row>
                  <Col className="text-start">SubTotal</Col>
                  <Col className="text-end">${getTotalCartAmount()}</Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col className="text-start">Shipping Fee</Col>
                  <Col className="text-end">Free</Col>
                </Row>
                <hr />
                <Row className="total-row">
                  <Col className="text-start fw-700 ">Total</Col>
                  <Col className="text-end">${getTotalCartAmount()}</Col>
                </Row>
              </div>

              <div>
                <Button className="total-cart-btn">PROCEED TO CHECKOUT</Button>
              </div>
            </Col>
            <Col xl={6} lg={6}>
                <div className="mx-5 px-5 promo-code">
                    <div className="">If you have a promo code, Enter it here </div>
                    <div className="my-4 promoBox">
                        <input type="text" placeholder="promo code"/>
                        <Button className="promoBox-btn">Submit</Button>
                    </div>
                </div>
            </Col>
          </Row>
        </div>
      </div>
    </CartItemsStyled>
  );
};

export default CartItems;
