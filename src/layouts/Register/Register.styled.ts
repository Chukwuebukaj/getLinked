import styled from "styled-components";
import bgImage from "../../assets/3d-graphic-designer-showing-thumbs-up-png 1.png";

export const RegisterWrapper = styled.div`
  display: flex;
  padding: 3.56rem 6rem 3.56rem 0;
  position: relative;
  top: 7.7rem;
`;
export const RegisterLeft = styled.div`
  width: 50%;
  height: 44.8125rem;
  flex-shrink: 0;
  background: url("${bgImage}") no-repeat center;
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
`;
