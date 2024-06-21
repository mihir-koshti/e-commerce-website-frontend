import styled from "styled-components";

export const NewsLettersStyled = styled.div`
  .newsLetter {
    background: linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%);
    // margin: 20px;
    
    margin-bottom: 140px;
    padding: 50px 140px;
    text-align: center;
  }
  .newsLetter h1 {
    font-size: 50px;
    font-weight: 600;
    margin-bottom: 24px;
  }

  .newsLetter p {
    font-size: 20px;
    font-weight: 600;
  }

  .Email-input {
    text-align: center;
    justify-content: space-between;
    display: flex;
    background: #ffffff;
    border-radius: 80px;
    border: 1px solid #e3e3e3;
    // width: 730px;
        margin: 20px 140px;
  }

  .Email-input input {
    margin-left: 30px;
    border: none;
    outline: none;
    width: -webkit-fill-available;
    color: #616161;
    font-family: Poppins;
    padding: 12px;
  }

  .subcribe-btn {
    border-radius: 80px;
    background: black;
    color: white;
    font-size: 16px;
    padding : 12px 24px;
  }

   @media (max-width: ${({ theme }) => theme.tablet}) { 
      .newsLetter {
        padding: 20px 20px !important;
      }

      .newsLetter h1 {
        font-size: 40px !important;
      }
   }

   @media (max-width: ${({ theme }) => theme.mobileBig}) {
    .Email-input {
      margin: 20px 20px !important;
    }

    .Email-input input {
      padding: 0px;
    }
   }
`;
