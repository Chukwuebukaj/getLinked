import styled from "styled-components";
import bgImage from "../../assets/08-1.png";

export const PrivacyWrapper = styled.section`
  display: flex;
  gap: 3.12rem;
  padding: 10.44rem 9.19rem;
  align-items: flex-end;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  position: relative;

  .privacy-image {
    width: 33.125rem;
    height: 40.5rem;
    flex-shrink: 0;
    left: 51.69rem;
    top: 6rem;
    z-index: -1;
  }

  .grey1 {
    width: 1.625rem;
    height: 2rem;
    flex-shrink: 0;
    left: 32.12rem;
    top: 9.94rem;
  }

  .grey2 {
    width: 1.625rem;
    height: 2rem;
    flex-shrink: 0;
    left: 85.06rem;
    top: 54.63rem;
  }

  .white1 {
    width: 0.9375rem;
    height: 1.125rem;
    flex-shrink: 0;
    left: 79.06rem;
    top: 17.125rem;
  }

  .purple1 {
    width: 1.4375rem;
    height: 1.75rem;
    flex-shrink: 0;
    left: 45.8rem;
    top: 17.5rem;
  }

  .pink {
    width: 0.9375rem;
    height: 1.125rem;
    flex-shrink: 0;
    left: 61.9rem;
    top: 43.56rem;
  }

  .white2 {
    width: 0.9375rem;
    height: 1.125rem;
    flex-shrink: 0;
    left: 57.6rem;
    top: 50.19rem;
  }

  .purple2 {
    width: 1.875rem;
    height: 2.25rem;
    flex-shrink: 0;
    left: 6.25rem;
    top: 52.38rem;
  }

  @media (max-width: 768px) {
    padding: 3rem;
    flex-direction: column;
    gap: 9rem;
    align-items: center;

    .privacy-image {
      width: 15.5625rem;
      height: 19.4375rem;
      left: 4.56rem;
      top: 59.94rem;
    }

    .grey1 {
      width: 0.5rem;
      height: 0.5rem;
      left: 17.9rem;
      top: 2.69rem;
    }

    .grey2 {
      width: 0.5rem;
      height: 0.5rem;
      flex-shrink: 0;
      left: 20.1rem;
      top: 83.88rem;
    }

    .white1 {
      width: 0.4375rem;
      height: 0.5rem;
      left: 16.4rem;
      top: 65.69rem;
    }

    .purple1 {
      width: 1.0625rem;
      height: 1.25rem;
      left: 19.1rem;
      top: 14.5rem;
    }

    .pink {
      width: 1.0625rem;
      height: 1.25rem;
      left: 2.44rem;
      top: 64.44rem;
    }

    .white2 {
      width: 0.5625rem;
      height: 0.625rem;
      left: 5.5rem;
      top: 83.25rem;
    }

    .purple2 {
      width: 1.0625rem;
      height: 1.25rem;
      left: 1.38rem;
      top: 45.37rem;
    }
  }
`;
export const PrivacyLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.31rem;

  .overlay-pr {
    width: 44.8125rem;
    height: 39.25rem;
    flex-shrink: 0;
    background-blend-mode: hard-light;
    z-index: -1;
    top: 47.62rem;
    left: -12rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;

    .overlay-pr {
      width: 17.8125rem;
      height: 22.875rem;
      top: 38rem;
      left: -6rem;
    }
  }
`;

export const PrivacyRight = styled.div`
  background: url("${bgImage}") no-repeat center;
  background-size: 100% 100%;
  width: 34.9375rem;
  height: 46.8125rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 21.9375rem;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.88rem;

  .privacy {
    display: flex;
    flex-direction: column;
    font-family: Clash Display;
    font-size: 2rem;
    font-weight: 700;
    line-height: normal;

    span {
      color: #d434fe;
    }
  }

  .last-updated {
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.71875rem; /* 196.429% */
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 188.4%; /* 1.6485rem */
  }

  @media (max-width: 768px) {
    gap: 1rem;
    .privacy {
      font-size: 1.25rem;
    }

    p,
    .last-updated {
      font-size: 0.75rem;
    }
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 35.5625rem;
  flex-shrink: 0;
  padding: 3.69rem;
  gap: 1.5rem;
  border-radius: 0.3125rem;
  border: 1px solid #d434fe;
  background: rgba(217, 217, 217, 0.03);

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 216.4%; /* 1.8935rem */
  }

  button {
    width: 10.75rem;
    height: 3.3125rem;
    flex-shrink: 0;
    border-radius: 0.25rem;
    background: linear-gradient(
      270deg,
      #903aff 0%,
      #d434fe 56.42%,
      #ff26b9 99.99%,
      #fe34b9 100%
    );
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
    border: 1px solid transparent;
    margin: 0 auto;

    &:hover {
      background: transparent;
      border-radius: 0.25rem;
      border: 1px solid #ff29b9;
    }
  }

  span {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 100%; /* 1.8935rem */
  }

  .lp {
    color: #d434fe;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 0.8rem;

    p {
      font-size: 0.75rem;
    }

    span {
      font-size: 0.8125rem;
    }

    button {
      width: 6.02188rem;
      height: 1.95913rem;
      flex-shrink: 0;
      font-size: 0.75rem;
    }
  }
`;

export const Terms = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.87rem;

    svg {
      margin-top: 0.4rem;
      width: 1.0625rem;
      height: 1.0625rem;
      flex-shrink: 0;
    }
  }

  @media (max-width: 768px) {
    li {
      text-align: left;
    }
  }
`;
