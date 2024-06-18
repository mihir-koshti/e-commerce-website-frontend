import styled from "styled-components";

export const NavbarStyled = styled.div`
  .navbar {
    // color: red;
    // border-Bottom: solid 1px black;
    box-shadow: 0px 0px 20px 0px;
  }
  .Brand-Name {
    font-family: "Mochiy Pop One", sans-serif;
    align-self: center;
    margin: 0px;
    font-size: 30px;
  }

  .selectedTab {
    color: ${({theme}) => theme.colors.primary2};
    font-size: 20px !important;
  }
  .loginBtn {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.btnTextColor};
    padding: 12px 24px;
    border-radius: 34px;
    border: 0px solid black !important ;
    box-shadow: 2px 2px 1px 0px black;
  }

  .loginBtn:hover {
    background: ${({ theme }) => theme.colors.btnHoverPrimaryColor};
    box-shadow: none;
  }

  .nav-link:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  .nav-link:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    top: 12px;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: relative;
    background: ${({ theme }) => theme.colors.black};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  .nav-link:hover:after {
    width: 100%;
    left: 0;
  }

  .navbar-nav .nav-link.active,
  .navbar-nav .nav-link.show {
    color: ${({ theme }) => theme.colors.primary};
  }

  .cart-count {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -32px;
    border-radius: 50%;
    font-size: 14px;
    width: 20px;
    height: 20px;
    position: relative;
    right: 9px;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.btnTextColor};
  }
`;
