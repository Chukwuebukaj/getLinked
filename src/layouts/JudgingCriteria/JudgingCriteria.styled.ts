import styled from "styled-components";

export const JCWrapper = styled.section`
  display: flex;
  gap: 3.31rem;
  padding: 4.88rem 9.69rem 10rem 4.13rem;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 2;
  overflow: hidden;
  width: 100vw;
  position:relative;

  .overlay-jc {
    width: 44.8125rem;
    height: 39.25rem;
    flex-shrink: 0;
    top: 40rem;
    left: 60rem;
    background-blend-mode: hard-light;
    z-index: -1;
    border: 1px solid red;
    overflow: hidden;

  }
`;

export const JCLeft = styled.div<{ $bgImg: string }>`
  width: 44.375rem;
  height: 36.6875rem;
  flex-shrink: 0;
  background: url("${({ $bgImg }) => $bgImg}") no-repeat center;
  background-size: 100% 100%;

  .overlay {
    width: 64.8125rem;
    height: 59.25rem;
    flex-shrink: 0;
    margin-top: 8rem;
    left: -10rem;
    z-index: -1;
  }
`;

export const JCRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35.25rem;

  .top {
    font-family: Clash Display;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2rem; /* 0rem */
  }

  .purple {
    color: #d434fe;
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
  }
`;

export const CriteriaList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.38rem;
  padding: 1.31rem 0 3.94rem 0;

  span {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 173.5%;
  }

  .title {
    color: #ff26b9;
    font-size: 1rem;
    font-weight: 700;
  }
`;
