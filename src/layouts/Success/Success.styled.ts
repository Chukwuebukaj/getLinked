import styled from "styled-components";
import greenCircle from "../../assets/green-circle.png";
import happyMan from "../../assets/happy-man.png";
import wink from "../../assets/wink.png";

export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 199;
  background: rgba(21, 14, 40, 0.93);
`;

export const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 42.6875rem;
  height: 40.5rem;
  flex-shrink: 0;
  margin: auto;
  padding: 2rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.3125rem;
  border: 1px solid #d434fe;

  a {
    width: 100%;
  }

  button {
    width: 100%;
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
    border: 1px solid transparent;
  }

  p {
    text-align: center;
    font-size: 1rem;
    font-weight: 600;
    line-height: 0.1rem;
    font-size: 2rem;
  }

  .small {
    text-align: center;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 0.1rem;
  }

  .easy {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: -2rem;
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  width: 26.6875rem;
  height: 20.0625rem;
  flex-shrink: 0;
  justify-content: center;
`;

export const GreenCircle = styled.div`
  background: url("${greenCircle}") no-repeat center;
  background-size: 100% 100%;
  width: 18rem;
  height: 18rem;
  flex-shrink: 0;
  margin-right: -10rem;
  margin-top: -1rem;
  //   position: absolute;
`;

export const HappyMan = styled.div`
  background: url("${happyMan}") no-repeat center;
  background-size: 100% 100%;
  width: 19.0625rem;
  height: 19.0625rem;
  flex-shrink: 0;
`;

export const WinkEmoji = styled.p`
  background: url("${wink}") no-repeat center;
  background-size: 100% 100%;
  width: 0.875rem;
  height: 0.875rem;
  flex-shrink: 0;
`;
