import styled from "styled-components";

export const CartItemsStyled = styled.div`

    .cart-items {
        margin: 100px 0px;
    }

    .cart-table-head{
        font-size: 18px;
        font-weight: 600;
    }

    .cart-items-name{
        width: 300px;
    }
    .cart-table-body{
        font-size: 16px;
        font-weight: 500;
    }

    .cart-table-body td {
        padding: 24px 0px;
    }

    .cart-remove-icon {
        width: 15px;
       
        cursor: pointer;
    }
    .Product-quantity-btn {
        color: ${({theme}) => theme.colors.black};
        border: 2px solid #ebebeb;
        background: #fff;
    }

    .cart-total-card {
        padding : 120px 0px;
       
    }

    .total-card{
        font-size: 18px;
        font-weight: 600;
    }
    .total-row {
        font-size: 24px;
        font-weight: 700;
    }

    .total-cart-btn{
        outline: none;
        border: none;
        background: ${({theme}) => theme.colors.primary2};
        color: #fff;
        padding: 12px 24px;
        font-size: 18px;
        font-weight: 600;
        border-radius: 0px;
    }

    .promo-code {
        font-size: 18px;
        font-weight: 500;
    }

    .promoBox {
        padding: 0px 0px 0px 24px;
        background: #eaeaea;
        display: flex;
        justify-content: space-between;
    }

    .promoBox input {
        outline: none;
        border: none;
        background: transparent;
    }

    .promoBox-btn {
        font-size: 16px;
        background: black;
        color: white;
        padding: 12px 24px;
        border-radius: 0px;
    }
`;