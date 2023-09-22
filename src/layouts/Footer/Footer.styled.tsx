import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 4.19rem 10.94rem 0 10.94rem;
  background: #100b20;
  position: relative;

  .last {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: normal;
    margin: 3.31rem auto;
  }

  .white1 {
    width: 0.9375rem;
    height: 1.125rem;
    flex-shrink: 0;
    top: 6.69rem;
    left: 6.56rem;
  }

  .white2 {
    width: 0.9375rem;
    height: 1.125rem;
    flex-shrink: 0;
    left: 86.1rem;
    top: 14.69rem;
  }

  .pink {
    width: 0.9375rem;
    height: 1.125rem;
    flex-shrink: 0;
    left: 46.3rem;
    top: 17.62rem;
  }

  .grey {
    width: 0.9375rem;
    height: 1.125rem;
    flex-shrink: 0;
    left: 56rem;
    top: 6.19rem;
  }

  @media (max-width: 768px) {
    padding: 3.19rem;
  }
`;

export const FooterBody = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const First = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .info {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 172.4%; /* 1.293rem */
  }

  .tu-pp {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 172.4%; /* 1.293rem */
    display: flex;
    align-items: center;
    gap: 0.2rem;
    margin-top: 4rem;

    a {
      color: #fff;
    }

    .divider {
      color: #d434fe;
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    .tu-pp {
      margin-top: 2.44rem;
    }
  }
`;
export const Second = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #d434fe;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 172.4%; /* 1.5085rem */
  }

  .follow {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: normal;
  }

  @media (max-width: 768px) {
  }
`;

export const UsefulLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.69rem;
  a {
    color: #fff;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 172.4%; /* 1.293rem */

    &:hover {
      background: linear-gradient(90deg, #903aff 3.08%, #ff26b9 93.85%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media (max-width: 768px) {
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.12rem;

  @media (max-width: 768px) {
  }
`;
export const SocialMediaIcons = styled.div`
  display: flex;
  list-style: none;
  gap: 1rem;

  a {
    color: #fff;

    &:hover {
      color: #d434fe;
    }
  }

  @media (max-width: 768px) {
  }
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.38rem;

  li {
    display: flex;
    gap: 1rem;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: normal;
  }

  @media (max-width: 768px) {
  }
`;
export const Third = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.19rem;

  span {
    color: #d434fe;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 172.4%; /* 1.5085rem */
  }

  @media (max-width: 768px) {
  }
`;
