import styled from "styled-components";

export const PrizesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.31rem;
  align-items: center;
  padding: 4.63rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 2;

  .overlayP1 {
    width: 34.25rem;
    height: 30.125rem;
    flex-shrink: 0;
    z-index: -1;
    margin-top: -4rem;
    margin-left: 5rem;
  }

  .overlayP2 {
    width: 34.25rem;
    height: 30.125rem;
    flex-shrink: 0;
    top: 8rem;
    left: 38rem;
    z-index: -1;
  }
`;

export const PrizesTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  margin-left: auto;

  .title {
    font-family: Clash Display;
    font-size: 2rem;
    font-weight: 700;
    line-height: normal;

    span {
      color: #d434fe;
    }
  }

  p {
    width: 27rem;
  }
`;
export const PrizesBody = styled.div`
  display: flex;
  gap: 2.31rem;
`;
export const PrizesLeft = styled.div<{ $bgImg: string }>`
  width: 34.25rem;
  height: 30.125rem;
  flex-shrink: 0;
  background: url("${({ $bgImg }) => $bgImg}") no-repeat center;
  background-size: 100% 100%;
`;
export const PrizesRight = styled.div`
  display: flex;
  position: relative;
  z-index: 2;

  .runners {
    margin-top: 6rem;
  }
`;

export const PrizeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .winner {
    border: 1px solid #903aff;
    background: rgba(144, 58, 255, 0.12);
  }
`;

export const MedalWrapper = styled.div<{
  $width: string;
  $height: string;
  $bgImg: string;
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background: url("${({ $bgImg }) => $bgImg}") no-repeat center;
  background-size: 100% 100%;
  z-index: 2;
`;

export const PrizeDetails = styled.div<{
  $borderColor: string;
  $bgColor: string;
  $fontSize: string;
  $color: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 13.25rem;
  height: 18.5rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  border: 1px solid ${({ $borderColor }) => $borderColor};
  background: ${({ $bgColor }) => $bgColor};
  justify-content: flex-end;
  margin-top: -6rem;

  .position {
    font-size: ${({ $fontSize }) => $fontSize};
    font-weight: 700;
    // line-height: 216.4%; /* 4.869rem */
  }

  .runner {
    font-size: 1.5rem;
    font-weight: 600;
    // line-height: 216.4%; /* 3.246rem */
  }

  .reward {
    color: ${({ $color }) => $color};
    font-size: 2rem;
    font-weight: 700;
    line-height: 216.4%; /* 4.328rem */
  }
`;
