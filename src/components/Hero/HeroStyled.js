import styled from "styled-components";

export const HeroStyled = styled.div`
  // margin-top: 75px;
  // margin-bottom: 75px;
  .hero {
    background: linear-gradient(180deg, #fde1ff, #e1ffea22 60%);
  }
  .Text {
    font-size: 24px;
  }
  .hero-left {
    display: flex;
    align-items: center;
  }
  .hero-left h2 {
    font-weight: 600;
  }
  .Banner-text {
    font-size: 62px;
    font-weight: 700;
    // line-height: 1.2;
  }
  .hand-icon {
    display: flex;
    align-items: center;
  }
  .hand-icon img {
    width: 60px;
  }

  .hero-latest-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    // gap: 15px;
    // width: 310px;
    // height: 70px;
    border-radius: 75px;
    margin-top: 30px;
    background: ${({ theme }) => theme.colors.primary2};
    color: white;
    font-size: 20px;
    font-weight: 500;
  }
  .Banner-image {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.desktop}) {
    .Text {
      font-size: 18px !important;
    }
  }
  @media (max-width: ${({ theme }) => theme.minDesktop}) {
    .Banner-text {
      font-size: 55px !important;
    }

    .hero-Image {
      height: 600px !important;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    .Banner-text {
      font-size: 45px !important;
    }
    .Text {
      font-size: 15px !important;
    }

    .hero-Image {
      height: 500px !important;
    }

    .hero-latest-btn {
      font-size: 18px !important;
      padding: 10px !important;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobileBig}) {
    .banner-1 {
      width: -webkit-fill-available;
      text-align: center;
      display: grid !important;
    }
    .hero-Image {
      height: 450px !important;
    }
    .hand-icon {
      justify-content: center;
    }
    .Text {
      font-size: 14px !important;
    }
    .Banner-text {
      font-size: 40px !important;
    }

    .hero-latest-btn {
      width: max-content !important;
      padding: 10px 15px !important;
      justify-self: center;
    }

    .hero-left {
      margin-block: 50px !important;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    .hero-Image {
      height: 400px !important;
    }
  }
`;
