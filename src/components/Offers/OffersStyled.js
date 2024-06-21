import styled from "styled-components";

export const OffersStyled = styled.div`
  margin-top: 120px;
  .offers {
    margin: auto;
    padding: 0px 140px;
    margin-bottom: 150px;
    background: linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%);
  }
  .offer-cloumn-2 {
    text-align: right;
    margin-top: 34px;
  }
  .offer-cloumn-1 {
    text-align: left;
    align-self: center;
  }
  .offer-cloumn-1 h1 {
    font-size: 50px;
    font-weight: 600;
  }
  .offer-cloumn-1 p {
    font-size: 14px;
    font-weight: 600;
  }
  .offer-btn {
    background: ${({ theme }) => theme.colors.primary2};
    color: ${({ theme }) => theme.colors.btnTextColor};
    border: none;
    border-radius: 35px;
    padding: 6px 34px;
  }

   @media (max-width: ${({ theme }) => theme.tablet}) { 
      .offers {
        padding: 0px 20px !important;
      }
   }

   @media (max-width: ${({ theme }) => theme.mobileBig}) { 
      .offers {
        padding: 40px 25px !important;
      }
   }

    @media (max-width: ${({ theme }) => theme.mobileBig}) { 
       .offer-cloumn-1 h1 {
        font-size: 40px;
       }

       .offer-img {
        height: 300px !important;
       }
    }
`;
