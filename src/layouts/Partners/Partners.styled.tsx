import styled from "styled-components";

export const PartnersWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  padding: 7.13rem 0 8rem 0;
  gap: 4.06rem;
  position: relative;

  .overlay-ps {
    width: 64.8125rem;
    height: 59.25rem;
    flex-shrink: 0;
    background-blend-mode: hard-light;
    top: 0;
    left: -20rem;
    z-index: -1;
  }

  .overlay-ps1 {
    left: 55rem;
    top: 30rem;
    z-index:-1;
  }

  .purple {
    width: 1.875rem;
    height: 2.25rem;
    flex-shrink: 0;
    left: 13.5rem;
    top: 14.38rem;
  }

  .pink {
    width: 1.3125rem;
    height: 1.5625rem;
    flex-shrink: 0;
    top: 24rem;
    left: 50.69rem;
  }

  .white {
    width: 1.625rem;
    height: 2rem;
    flex-shrink: 0;
    left: 50.5rem;
    top: 47.94rem;
  }
`;

export const PartnersTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.38rem;
  text-align: center;
  width: 28.25rem;

  span {
    font-family: Clash Display;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.71875rem; /* 85.938% */
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.71875rem; /* 196.429% */
  }
`;
export const PartnersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 9rem 11.19rem;
  justify-content: space-between;
  gap: 6.66rem;
  align-items: center;

  width: 78.4375rem;
  height: 35rem;
  flex-shrink: 0;
  border-radius: 0.3125rem;
  border: 1px solid #d434fe;
  background: rgba(255, 255, 255, 0.01);

  .pay-box {
    font-family: "Typo Hoop Demo", sans-serif;
    font-size: 3.1875rem;
    font-weight: 400;
    line-height: 1.71875rem; /* 53.922% */

    span {
      color: #00a3ff;
    }
  }

  .vp {
    display: flex;
    flex-direction: column;
    font-family: Voces;
    font-weight: 400;
    line-height: 1.71875rem; /* 67.073% */

    p {
      font-size: 2.5625rem;

      span {
        color: #f00;
        font-family: Volkhov;
        font-size: 2.5625rem;
        font-weight: 400;
      }
    }

    .tiny {
      font-size: 0.6875rem;
      font-weight: 400;
      margin-left: auto;
    }
  }

  .h1 {
  }

  .h2 {
    left: 37.5rem;
  }
  .h3 {
    left: 58.5rem;
  }

  .v1 {
    left: 35.3rem;
    margin-top: -10rem;
  }
  .v2 {
    left: 35.3rem;
    margin-top: 18rem;
  }
  .v3 {
    left: 56rem;
    margin-top: -10rem;
  }
  .v4 {
    left: 56rem;
    margin-top: 18rem;
  }
`;

export const ListItem = styled.li<{ $bgImg: string }>`
  background: url("${({ $bgImg }) => $bgImg}") no-repeat center;
  background-size: contain;
  width: 13.32431rem;
  height: 7.12163rem;
`;

export const Horizontal = styled.div`
  width: 16.08113rem;
  height: 0.25rem;
  background: #d434fe;
  position: absolute;
  margin-top: 4rem;
`;
export const Vertical = styled.div`
  width: 0.25rem;
  height: 7.02975rem;
  background: #d434fe;
  position: absolute;
`;
