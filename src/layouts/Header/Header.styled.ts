import styled from "styled-components";

export const HeaderWrapper = styled.header<{ $displayLinks: string }>`
  display: flex;
  justify-content: space-between;
  height: 3.3125rem;
  align-items: center;
  padding: 4.94rem 8rem 2.63rem 8rem;
  border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.18);
  z-index: 12;
  position: fixed;
  width: 100vw;
  backdrop-filter: blur(30px);

  .p {
    font-family: "Clash Display-Bold", Helvetica;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
  }

  .span {
    color: #ffffff;
  }

  .text-wrapper-7 {
    color: #d434fe;
  }

  .menu-btn,
  close-btn {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 1.75rem 3.38rem;

    nav {
      display: ${({ $displayLinks }) => $displayLinks};
    }

    .menu-btn {
      display: flex;
      background: transparent;
      border: solid transparent;
    }
  }
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 3.5rem;
  align-items: center;

  a {
    color: #fff;
    font-family: "Montserrat", sans-serif;

    &:hover {
      background: linear-gradient(90deg, #903aff 3.08%, #ff26b9 93.85%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1rem;
      font-weight: 400;
      line-height: normal;
    }
  }

  button {
    margin-left: 4.06rem;
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
    color: #fff;
    border: 1px solid transparent;

    &:hover {
      background: transparent;
      border-radius: 0.25rem;
      border: 1px solid #ff29b9;
    }
  }

  .current {
    background: linear-gradient(90deg, #903aff 3.08%, #ff26b9 93.85%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1rem;
    font-weight: 400;
    line-height: normal;
  }

  .register {
    background: transparent;
    border-radius: 0.25rem;
    border: 1px solid #ff29b9;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100vw;
    height: 30.75rem;
    border-radius: 0.5rem;
    border: 0.5px solid rgba(255, 255, 255, 0.04);
    background: #150e28;
    backdrop-filter: blur(30px);
    position: fixed;
    top: 0;
    left: 0;
    align-items: flex-start;
    padding: 0 2.94rem;
    justify-content: center;
    gap: 2rem;

    button {
      margin: 0;
      font-size: 1rem;
      font-weight: 400;
    }

    .close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      width: 1.4375rem;
      height: 1.4375rem;
      position: relative;
      margin-left: auto;

      .close-icon {
        width: 1.4375rem;
        height: 1.4375rem;
      }

      svg {
        width: 2rem;
        height: 2rem;
        position: absolute;
      }
    }

    a {
      font-size: 1.125rem;
      font-weight: 500;
      letter-spacing: -0.0625rem;
      font-family: "Inter", sans-serif;
    }
  }
`;
