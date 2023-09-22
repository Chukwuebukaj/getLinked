import styled from "styled-components";

export const IntroWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 6.81rem;
  padding: 3.87rem 9.56rem 4.88rem 15rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 2;
  position: relative;

  .small-pink {
    width: 1.3125rem;
    height: 1.5625rem;
    flex-shrink: 0;
    top: 13.94rem;
    left: 12.69rem;
  }

  .big-purple {
    left: 84.19rem;
    top: 13.5rem;
    width: 1.875rem;
    height: 2.25rem;
    flex-shrink: 0;
  }

  .curly {
    width: 3.08938rem;
    height: 3.62338rem;
    flex-shrink: 0;
    left: 43.06rem;
    top: 30.61rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    width: 100vw;
    gap: 3.62rem;
  }
`;

export const IntroLeft = styled.div<{ $bgImg: string }>`
  background: url("${({ $bgImg }) => $bgImg}") no-repeat center;
  background-size: 100% 100%;
  width: 30.625rem;
  height: 29.8125rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    width: 9.05269rem;
    height: 3.73463rem;
    flex-shrink: 0;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 122.5%; /* 1.8375rem */
  }

  @media (max-width: 768px) {
    width: 16.50025rem;
    height: 16.0625rem;
    flex-shrink: 0;
    margin: 0 auto;

    p {
      font-size: 0.875rem;
      width: 4.87744rem;
      height: 2.01213rem;
    }
  }
`;
export const IntroRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.4375rem;
  height: 29.8125rem;
  flex-shrink: 0;
  justify-content: center;

  span {
    color: #fff;
    font-family: Clash Display;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.71875rem; /* 196.429% */
  }

  .purple {
    color: #d434fe;
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.71875rem; /* 196.429% */
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    justify-content: flex-start;
    height: max-content;

    span {
      font-size: 1.25rem;
    }
    p {
      font-size: 0.8125rem;
    }
  }
`;
