import styled from "styled-components";

export const RulesWrapper = styled.div`
  display: flex;
  gap: 3rem;
  padding: 1rem 0 4.88rem 11.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 2;
  overflow: hidden;
  position: relative;

  .grey {
    width: 1.625rem;
    height: 2rem;
    flex-shrink: 0;
    left: 27.44rem;
    top: 10rem;
  }

  .white {
    width: 1.625rem;
    height: 2rem;
    flex-shrink: 0;
    left: 46.31rem;
    top: 29.06rem;
  }

  .white1 {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 0.62rem;
    padding: 0;
    width: 100vw;

    .white1 {
      display: block;
      width: 0.625rem;
      height: 0.75rem;
      flex-shrink: 0;
      left: 2.69rem;
      top: 11.56rem;
    }

    .grey {
      width: 0.75rem;
      height: 0.875rem;
      left: 21rem;
      top: 27.62rem;
    }

    .white {
      width: 0.625rem;
      height: 0.75rem;
      flex-shrink: 0;
      left: 6.75rem;
      top: 44.88rem;
    }
  }
`;
export const RulesLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-family: Clash Display;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2rem; /* 0rem */
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
    text-align: center;
    padding: 0 2.5rem 2.5rem 2.5rem;
    span {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.8125rem;
    }
  }
`;
export const RulesRight = styled.div<{ $bgImg: string }>`
  background: url("${({ $bgImg }) => $bgImg}") no-repeat center;
  background-size: 100% 100%;
  width: 41.5rem;
  height: 41.5rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100vw;
    height: 23.875rem;
  }
`;
