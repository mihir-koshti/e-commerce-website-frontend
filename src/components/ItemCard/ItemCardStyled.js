import styled from "styled-components";

export const ItemCardStyled = styled.div`

  .Item-price {
    display: flex;
  }
  .new-price-class {
    color: ${({ theme }) => theme.colors.newPriceColor};
    font-size: 18px;
    font-weight: 600;
  }
  .old-price-class {
    color: ${({ theme }) => theme.colors.oldPriceColor};
    font-size: 18px;
    font-weight: 500;
    text-decoration: line-through;
  }

  .Item-name {
    font-size: 15px;
    font-weight: 500;
  }
  .itemCard:hover {
    transform: scale(1.05);
    transition: 0.6s;
  }
  .img-class {
    width: -webkit-fill-available;
  }
`;
