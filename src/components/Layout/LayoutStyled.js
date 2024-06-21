import styled from "styled-components";

export const LayoutStyled = styled.div`
  .fs-24 {
    font-size: 24px !important;
  }
  .fs-48 {
      font-size: 48px;
    }
  
  .fw-500 {
    font-weight: 500 !important;
  }
  
  .fw-600 {
    font-weight: 600 !important;
  }
  .fw-700 {
    font-weight: 700 !important;
  }
  @media (max-width: ${({ theme }) => theme.desktop}) {
    .fs-24 {
        font-size: 15px !important;
    }
  }


  @media (max-width: ${({ theme }) => theme.minDesktop}) {
    .fs-24 {
        font-size: 15px !important;
    }
  }

  // @media (max-width: ${({ theme }) => theme.tablet}) {
  //   .fs-24 {
  //       font-size: 13px !important;
  //   }
  // }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    .fs-24 {
        font-size: 11px !important;
    }
  }
`;
