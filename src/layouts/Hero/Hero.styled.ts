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
  margin-top:7.7rem;
  position:relative;

  .hero-top {
    color: #fff;
    font-size: 2.25rem;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
    margin-left: auto;
    margin-right: 3.44rem;
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
`;

export const HeroBody = styled.div`
  display: flex;
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
`;
export const OverLay = styled.div`
  background: url("${overlay}") no-repeat center;
  background-size: 100% 100%;
  width: 43.17vw;
  height: 41.49vw;
  flex-shrink: 0;
  background-blend-mode: hard-light;
`;
