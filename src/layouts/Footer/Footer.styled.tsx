import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 4.19rem 10.94rem 0 10.94rem;
  background: #100b20;

  .last {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: normal;
    margin: 3.31rem auto;
  }
`;

export const FooterBody = styled.div`
  display: flex;
  justify-content: space-between;
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
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.12rem;
`;
export const SocialMediaIcons = styled.div`
  display: flex;
  list-style: none;
  gap: 1rem;

  a {
    color: #fff;
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
`;
