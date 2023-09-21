import styled from "styled-components";

export const FAQWrapper = styled.section`
  display: flex;
  gap: 1.56;
  padding: 8rem 6.31rem 3.94rem 13.69rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  align-items: center;
  z-index: 2;
  overflow: hidden;
  width: 100vw;
`;

export const FAQLeft = styled.div`
  display: flex;
  flex-direction: column;

  .top {
    font-family: Clash Display;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2rem; /* 0rem */
  }

  .purple {
    color: #d434fe;
  }

  p {
    color: #fff;
    font-family: Montserrat;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.71875rem; /* 196.429% */

    span {
      font-weight: 700;
    }
  }
`;

export const FAQRight = styled.div<{ $bgImg: string }>`
  width: 46.3125rem;
  height: 46.3125rem;
  flex-shrink: 0;
  background: url("${({ $bgImg }) => $bgImg}") no-repeat center;
  background-size: 100% 100%;
`;

export const QuestionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.56rem;
  width: 26.6875rem;
  padding-top: 3.25rem;

  li {
    display: flex;
    border-bottom: 1px solid #d434fe;
    justify-content: space-between;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.71875rem; /* 196.429% */
    cursor: pointer;
    align-items: center;
    padding-bottom: 0.81rem;

    .minus {
      font-size: 3rem;
    }

    svg {
      color: #d434fe;
    }
  }

  .open {
    color: #d434fe;
  }
`;
