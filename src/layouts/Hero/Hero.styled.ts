import styled from "styled-components";
import bgImage from "../../assets/man-wearing-smart-glasses-touching-virtual-screen-1.png";
import overlay from "../../assets/image-1.png";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.69rem;
  padding: 2rem 0 5.94rem 8rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 2;
  overflow: hidden;
  margin-top: 7.7rem;
  position: relative;

  .hero-top {
    color: #fff;
    font-size: 2.25rem;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
    margin-left: auto;
    margin-right: 3.44rem;
  }

  .metrix {
    z-index: -1;
    right: 0;
  }

  .curvedLine {
    left: 70rem;
    top: 4.5rem;
  }

  .whitestar {
    top: 4.25rem;
    left: 11.56rem;
    width: 1.625rem;
    height: 2rem;
    flex-shrink: 0;
  }

  .lightbulb {
    width: 3.3125rem;
    height: 4.5625rem;
    flex-shrink: 0;
    left: 40.25rem;
    top: 9.5rem;
    z-index: -1;
  }

  .greystar-top {
    width: 1.625rem;
    height: 2rem;
    left: 51.31rem;
    top: 9.12rem;
  }

  .chain {
    width: 5.375rem;
    height: 5.375rem;
    left: 44.12rem;
    top: 18.69rem;
  }

  .blast {
    left: 49.5rem;
    top: 19.56rem;
    width: 3.625rem;
    height: 3.625rem;
    flex-shrink: 0;
  }

  .greystar-bottom {
    left: 35.69rem;
    top: 37.81rem;
    width: 1.625rem;
    height: 2rem;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 3.62rem;
    width: 100vw;

    .hero-top {
      font-size: 1rem;
      width: 100%;
      line-height: normal;
      text-align: center;
    }

    .curvedLine {
      left: 14.6rem;
      top: 1.1rem;
      width: 7.1875rem;
      height: 0.4375rem;
      flex-shrink: 0;
    }

    .metrix {
      left: 0;
      bottom: 0;
    }

    .whitestar {
      top: 3.25rem;
      left: 7rem;
      width: 0.625rem;
      height: 0.75rem;
    }

    .lightbulb {
      width: 1.125rem;
      height: 1.625rem;
      left: 16.9rem;
      top: 4rem;
    }

    .greystar-top {
      width: 0.375rem;
      height: 0.5rem;
      left: 20.3rem;
      top: 3.12rem;
    }

    .chain {
      width: 2.04981rem;
      height: 2.04981rem;
      left: 18.5rem;
      top: 7.69rem;
    }

    .blast {
      left: 20.3rem;
      top: 7.9rem;
      width: 1.38244rem;
      height: 1.38244rem;
    }

    .greystar-bottom {
      left: 18.3rem;
      top: 15rem;
      width: 0.375rem;
      height: 0.5rem;
    }
  }
`;

export const HeroBody = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 37.3125rem;

  .get-linked {
    font-family: Clash Display;
    font-size: 5rem;
    font-weight: 700;
    line-height: normal;
  }

  .purple {
    color: #d434fe;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 166%; /* 2.075rem */
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
    border: 1px solid transparent;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
    margin-top: 2.56rem;
  }

  .count-down {
    display: flex;
    margin-top: 4.81rem;
    gap: 0.5rem;

    p {
      font-family: Unica One;
      font-size: 4rem;
      font-weight: 400;
      line-height: 133%; /* 5.32rem */
    }

    span {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 133%; /* 1.16375rem */
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    width: 100vw;

    .get-linked {
      font-size: 2rem;
    }
    .participate {
      font-size: 0.8125rem;
      line-height: 166%;
    }

    button {
      width: 9.5rem;
      height: 2.92731rem;
      flex-shrink: 0;
      margin-top: 1.5rem;
    }

    .count-down {
      margin-top: 0.89rem;

      p {
        font-size: 3rem;
      }
    }
  }
`;

export const HeroRight = styled.div`
  background: url("${bgImage}") no-repeat center;
  background-size: 100% 100%;
  position: absolute;
  left: 40rem;
  top: 9rem;
  background-blend-mode: luminosity;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 53.59vw;
  height: 46.28vw;
  flex-shrink: 0;

  @media (max-width: 768px) {
    left: 0;
    top: 0;
    width: 100vw;
    height: 22.64969rem;
    position: relative;
  }
`;
export const OverLay = styled.div`
  background: url("${overlay}") no-repeat center;
  background-size: 100% 100%;
  width: 43.17vw;
  height: 41.49vw;
  flex-shrink: 0;
  background-blend-mode: hard-light;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  animation: rotate 10s linear infinite; /* Rotation animation with a duration of 2 seconds */

  @media (max-width: 768px) {
    width: 21.12919rem;
    height: 20.30556rem;
    flex-shrink: 0;
  }
`;
