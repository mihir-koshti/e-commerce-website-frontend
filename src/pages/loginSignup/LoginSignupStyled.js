import styled from "styled-components";

export const LoginSignupStyled = styled.div`
  .loginSignUp {
    text-align: left;
    background: #fce3fe;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .LoginSignUp-Container {
    width: 580px;
    background: #fff;
    padding: 40px 60px;
    box-shadow: 0px 13px 45px 0px;
  }

  .LoginSignUp-Container h1 {
    margin: 20px 0px;
    margin-top: 0px !important;
    font-size: 35px;
  }

  .LoginSignUp-Container-btn {
    color: white;
    background: ${({theme}) => theme.colors.primary2};
    margin-top: 30px;
    border: none;
    font-size: 24px;
    font-weight: 500;
    padding: 10px 24px;
    width: -webkit-fill-available;
  }

  .loginSignUp-feilds input {
    padding: 15px;
    width: -webkit-fill-available;
    border: 1px solid #c9c9c9;
    outline: none;
    color: #5c5c5c;
  }

  .loginText {
    text-align: left;
    margin-top : 24px;
  }

  .loginText span{
    color: ${({theme}) => theme.colors.primary2};
    font-weight: 600;
  }

  .loginTermsClass {
    font-weight: 600;
  }
`;
