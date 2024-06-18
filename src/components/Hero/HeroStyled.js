import styled from "styled-components";

export const HeroStyled = styled.div`
  // margin-top: 75px;
  // margin-bottom: 75px;
  .hero {
    background: linear-gradient(180deg, #fde1ff, #e1ffea22 60%);
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
`;
