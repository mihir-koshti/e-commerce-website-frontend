import styled from "styled-components";

export const ShopCategoryStyled = styled.div`
  .banner-img {
    width: -webkit-fill-available;
  }

  .shopCategory-indexSort {
    // margin-top: 20px;
    // display: inline;
  }
  .shopCategory-indexSort p span {
    font-weight: 700;
  }

  .shopCategory-sort{
    border: 1px solid black;
    width: fit-content;
    padding: 12px;
    border-radius: 24px;
    justify-content: end;
    text-align: end;
  }

  .loadMore {
    display: flex;
    width: fit-content;
    padding: 12px 23px;
    justify-content: center;
    align-items: center;
    margin: 150px auto;
    border-radius: 74px;
    background: #ededed;
    color: #787878;
    font-size: 18px;
    font-weight: 500;
  }
`;
