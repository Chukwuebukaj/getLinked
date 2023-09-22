import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  padding: 5rem 8rem;
  justify-content: space-between;
  position: relative;
  top: 7.7rem;
  overflow: hidden;

  .overlay1,
  .overlay2 {
    width: 64.8125rem;
    height: 59.25rem;
    flex-shrink: 0;
    z-index: -1;
  }

  .overlay1 {
    top: -13.3rem;
    left: -20rem;
  }

  .overlay2 {
    top: 18rem;
    left: 56.7rem;
  }

  .pink {
    width: 1.3125rem;
    height: 1.5625rem;
    flex-shrink: 0;
    left: 12.8rem;
    top: 2.4rem;
  }

  .grey {
    width: 1.625rem;
    height: 2rem;
    flex-shrink: 0;
    left: 78.2rem;
    top: 1rem;
  }

  .purple {
    width: 1.875rem;
    height: 2.25rem;
    flex-shrink: 0;
    left: 42.1rem;
    top: 33.6rem;
  }

  .white {
    width: 1.625rem;
    height: 2rem;
    flex-shrink: 0;
    left: 84.9rem;
    top: 42.2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 2rem;
    width: 100vw;
    top: 3.5rem;

    .overlay1 {
      width: 24.75rem;
      height: 27.625rem;
      left: -6rem;
      // top: -14rem;
    }

    .pink {
      width: 0.6875rem;
      height: 0.8125rem;
      left: 11.3rem;
      top: 4.19rem;
    }

    .grey {
      width: 1rem;
      height: 1.25rem;
      left: 20rem;
      top: 4.63rem;
    }

    .purple {
      width: 0.75rem;
      height: 0.875rem;
      left: 2.13rem;
      top: 31rem;
    }

    .white {
      width: 0.75rem;
      height: 0.875rem;
      left: 21.9rem;
      top: 38.75rem;
    }
  }
`;

export const ContactLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
  }

  .line1 {
    color: #d434fe;
    font-family: Clash Display;
    font-size: 2rem;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 1.06rem;
  }

  .line2 {
    width: 6rem;
    margin-bottom: 1.06rem;
  }

  .line3 {
    width: 7.4375rem;
    margin-bottom: 1.31rem;
  }

  .line4 {
    margin-bottom: 1.38rem;
  }
  .line5 {
    width: 17rem;
    margin-bottom: 2.19rem;
  }

  .share {
    color: #d434fe;
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 0.87rem;
  }

  @media (max-width: 768px) {
    .line1 {
      font-size: 1.25rem;
    }
    p {
      font-size: 0.75rem;
    }
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 38.5625rem;
  height: 38.1875rem;
  flex-shrink: 0;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  span {
    color: #d434fe;
    font-family: Clash Display;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: normal;
  }

  input {
    width: 27.3125rem;
    flex-shrink: 0;
    border-radius: 0.25rem;
    border: 1px solid #fff;
    background: rgba(21, 14, 40);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
    margin-top: 2.44rem;
    padding: 0.8rem 1.81rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #fff;
    }
  }

  textarea {
    width: 27.3125rem;
    height: 7.4375rem;
    font-family: "Montserrat", sans-serif;
    flex-shrink: 0;
    border-radius: 0.25rem;
    border: 1px solid #fff;
    background: rgba(21, 14, 40);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
    padding: 0.8rem 1.81rem;
    margin-top: 2.44rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #fff;
    }
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
    margin: 1.94rem auto 0 auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    background: transparent;
    border: none;
    border-radius: 0.75rem;
    box-shadow: none;
    height: fit-content;
    gap: 1.56rem;

    button {
      margin: 0;
    }

    input,
    textarea {
      width: 100%;
      margin: 0;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 1.19rem;

  a {
    color: #fff;
  }
`;
