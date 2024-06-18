import styled from "styled-components";

export const ProductDisplayStyled = styled.div`
  .image {
    // width: auto;
    width: -webkit-fill-available;
    height: 156px;
    margin: 5px;
  }
    .imageMain {
    width: -webkit-fill-available;
    }

  .product-name {
    font-size: 36px;
    color: #3d3d3d;
    font-weight: 700;
  }

  .star-rating {
    display: flex;
    align-items: center;
    margin-top: 13px;
    gap: 5px;
    font-size: 16px;
  }

  .prices-class {
    display : flex;
    margin: 40px 0px;
    gap: 30px;
    font-size: 24px;
    font-weight: 700;
  }
    
  .old-price {
    color: ${({theme}) => theme.colors.oldPriceColor};
    text-decoration: line-through;
  }

  .new-price {
    color: ${({theme}) => theme.colors.primary2};
  }

  .product-sizes h4 {
    font-size: 20px;
    color: #3d3d3d;
  }

  .product-size-main {
    display: flex;
    margin : 20px 0px;
    gap: 20px;
  }

  .product-size-main div {
    padding: 12px 20px;
    background: #fbfbfb;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    cursor: pointer;
  }

  .cart-btn {
    padding: 20px 40px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background: ${({theme}) => theme.colors.primary2};
    border: none;
    outline: none;
    
  }

  .category {
    margin-top: 10px;
  }

  .category span {
    font-weight: 700;
  }
`;
