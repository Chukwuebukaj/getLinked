import styled from "styled-components";

export const FAQWrapper = styled.section`
  display: flex;
  gap: 1.56rem;
  padding: 8rem 6.31rem 3.94rem 13.44rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  align-items: center;
  z-index: 2;
  overflow: hidden;
  width: 100vw;
  position: relative;

  .question1,
  .question3 {
    left: 47rem;
    top: 6rem;
  }
  .question2 {
    left: 55rem;
    top: 1rem;
  }

  .question3 {
    left: 67rem;
  }

  .purple-icon {
    width: 1.875rem;
    height: 2.25rem;
    flex-shrink: 0;
    left: 11.44rem;
    top: 8rem;
  }

  .pink {
    width: 1.3125rem;
    height: 1.5625rem;
    flex-shrink: 0;
    left: 63.75rem;
    top: 7rem;
  }

  .pink1 {
    left: 51.19rem;
    top: 15.5rem;
  }

  .grey {
    width: 1.625rem;
    height: 2rem;
    flex-shrink: 0;
    left: 45rem;
    top: 30rem;
  }

  .white {
    width: 1.625rem;
    height: 2rem;
    flex-shrink: 0;
    left: 76.62rem;
    top: 53rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 5.38rem;

    .purple-icon {
      width: 1.125rem;
      height: 1.375rem;
      left: 3.69rem;
      top: 2.94rem;
    }

    .pink {
      width: 0.625rem;
      height: 0.625rem;
      left: 11.6rem;
      top: 38.63rem;
    }

    .pink1 {
      width: 0.4375rem;
      height: 0.5625rem;
      left: 6.13rem;
      top: 45.5rem;
    }

    .grey {
      width: 0.625rem;
      height: 0.75rem;
      left: 3.13rem;
      top: 49.13rem;
    }

    .white {
      width: 1rem;
      height: 1.25rem;
      left: 17.6rem;
      top: 58.75rem;
    }

    .question1,
    .question3 {
      top: 39.25rem;
    }

    .question1 {
      left: 4.81rem;
    }

    .question2 {
      left: 8.81rem;
      top: 37rem;
    }

    .question3 {
      left: 13.69rem;
    }
  }
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

  @media (max-width: 768px) {
    align-items: center;

    .top {
      font-size: 1.25rem;
    }

    .got-answers {
      text-align: center;
      font-size: 0.75rem;
    }
  }
`;

export const FAQRight = styled.div<{ $bgImg: string }>`
  width: 46.3125rem;
  height: 46.3125rem;
  flex-shrink: 0;
  background: url("${({ $bgImg }) => $bgImg}") no-repeat center;
  background-size: 100% 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 20.4375rem;
  }
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
    background: rgba(21, 14, 40);

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

  @media (max-width: 768px) {
    width: 100%;
    gap: 0.71rem;

    li {
      font-size: 0.75rem;
      line-height: 1.28125rem; /* 170.833% */
    }
  }
`;
