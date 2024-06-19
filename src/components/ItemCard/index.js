import React from "react";
import { ItemCardStyled } from "./ItemCardStyled";
import { Link } from "react-router-dom";
const ItemCard = ({ image, name, old_price, new_price, id }) => {
  return (
    <ItemCardStyled>
      <div className="itemCard my-4">
        <Link to={`/product/${id}`}>
          <img onClick={window.scrollTo(0,0)} src={image} alt="" className="img-class" />
        </Link>
        <div className="Item-name my-2">{name}</div>
        <div className="Item-price">
          <div className="new-price-class mx-1">${new_price}</div>
          <div className="old-price-class mx-2">${old_price}</div>
        </div>
      </div>
    </ItemCardStyled>
  );
};

export default ItemCard;
