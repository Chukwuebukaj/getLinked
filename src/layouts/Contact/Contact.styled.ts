import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  padding: 5rem 8rem;
  justify-content: space-between;
  position: relative;
  top: 7.7rem;

  // align-items: center;
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
    background: rgba(255, 255, 255, 0.03);
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
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
    padding: 0.8rem 1.81rem;
    // font-family: Montserrat;
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
`;

export const Icons = styled.div`
  display: flex;
  gap: 1.19rem;

  a {
    color: #fff;
  }
`;
