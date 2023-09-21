import styled from "styled-components";

export const RulesWrapper = styled.div`
  display: flex;
  gap: 3rem;
  padding: 1rem 0 4.88rem 11.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 2;
  overflow:hidden;

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
`;
export const RulesRight = styled.div<{ $bgImg: string }>`
  background: url("${({ $bgImg }) => $bgImg}") no-repeat center;
  background-size: 100% 100%;
  width: 41.5rem;
  height: 41.5rem;
  flex-shrink: 0;
`;
