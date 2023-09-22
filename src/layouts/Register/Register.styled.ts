import styled from "styled-components";
import bgImage from "../../assets/3d-graphic-designer-showing-thumbs-up-png 1.png";

export const RegisterWrapper = styled.div`
  display: flex;
  padding: 3.56rem 6rem 3.56rem 0;
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

  .grey1 {
    width: 1.625rem;
    height: 2rem;
    flex-shrink: 0;
    left: 73.4rem;
    top: 4.7rem;
  }

  .pink {
    width: 1.3125rem;
    height: 1.5625rem;
    flex-shrink: 0;
    top: 6.7rem;
    left: 8rem;
  }

  .purple {
    width: 1.4375rem;
    height: 1.75rem;
    flex-shrink: 0;
    top: 37.9rem;
    left: 37.3rem;
  }

  .grey2 {
    width: 1.625rem;
    height: 2rem;
    flex-shrink: 0;
    top: 44.8rem;
    left: 8.69rem;
  }

  .white {
    width: 0.625rem;
    height: 0.75rem;
    flex-shrink: 0;
    left: 81.1rem;
    top: 49.8rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 3rem;
  }
`;
export const RegisterLeft = styled.div`
  width: 50%;
  height: 44.8125rem;
  flex-shrink: 0;
  background: url("${bgImage}") no-repeat center;
  background-size: 100% 100%;

  @media (max-width: 768px) {
    width: 12.1875rem;
    height: 9.6875rem;
  }
`;
export const RegisterForm = styled.form`
  width: 50%;
  flex-shrink: 0;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 3rem;

  .reg {
    color: #d434fe;
    font-family: Clash Display;
    font-size: 2rem;
    font-weight: 600;
    line-height: normal;
  }

  .part {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: normal;
    margin-top: auto;
  }

  .create {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: normal;
    margin-top: 1.19rem;
  }

  .be-part {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px dashed #d434fe;
      width: 6.3125rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0;
    background: transparent;

    .part {
      font-size: 0.75rem;
    }

    .create {
      font-size: 1.25rem;
    }

    .be-part img {
      width: 1.65444rem;
      height: 1.65444rem;
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1.81rem 0;
  margin-top: 2.06rem;

  label {
    display: flex;
    flex-direction: column;
    width: 48%;
    gap: 0.69rem;
  }

  input,
  select {
    padding: 0.94rem 1.69rem;
    background: transparent;
    width: 100%;
    border-radius: 0.25rem;
    border: 1px solid #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
  }

  .review {
    color: #ff26b9;
    font-size: 0.75rem;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
  }

  .agree {
    display: flex;
    width: 100%;
    gap: 1rem;

    label,
    svg {
      width: 0.875rem;
      height: 0.875rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      border-radius: 0.125rem;
      border: 1px solid #fff;
      background: transparent;
      cursor: pointer;
    }

    p {
      font-size: 0.75rem;
      font-weight: 400;
      line-height: normal;
    }
  }

  button {
    width: 100%;
    border-radius: 0.25rem;
    background: linear-gradient(
      270deg,
      #903aff 0%,
      #d434fe 56.42%,
      #ff26b9 99.99%,
      #fe34b9 100%
    );
    height: 3.3125rem;
    flex-shrink: 0;
    border: 1px solid transparent;
    color: #fff;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 1.12rem 1.19rem;

    .category {
      grid-row: 5 / span 1;
      width: 9.6875rem;
    }

    .group-size {
      grid-row: 5 / span 1;
      width: 5.4375rem;
      margin-left: auto;
    }

    button {
      width: 10.75rem;
      height: 3.3125rem;
      margin: 0 auto;
    }

    label {
      width: 100%;
      grid-column: 1 / span 1;

      span {
        font-size: 0.8125rem;
      }
    }

    input,
    select {
      padding: 0.75rem 0 0.75rem 0.5rem;
      font-size: 0.8125rem;
    }

    .agree p {
      font-size: 0.625rem;
    }
  }
`;
