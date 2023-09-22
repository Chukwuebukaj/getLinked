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
    z-index: -1;
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

  @media (max-width: 768px) {
    padding: 2.56rem 1.8rem;

    .overlay-ps {
      width: 17.875rem;
      height: 22.75rem;
      top: -4rem;
      left: -6rem;
    }

    .overlay-ps1 {
      left: 13rem;
      top: 18rem;
      z-index: -1;
    }

    .purple {
      width: 0.5rem;
      height: 0.625rem;
      left: 3.25rem;
      top: 13.81rem;
    }

    .pink {
      width: 0.4375rem;
      height: 0.4375rem;
      top: 17.62rem;
      left: 13.3rem;
    }

    .white {
      width: 0.625rem;
      height: 0.75rem;
      left: 19.3rem;
      top: 22.06rem;
    }
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

  @media (max-width: 768px) {
    width: 100%;
    gap: 0.31rem;

    span {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.75rem;
    }
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
  position: relative;

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
    left: 30.99rem;
  }
  .h3 {
    left: 52.25rem;
  }

  .v1 {
    left: 29.24rem;
    margin-top: -10rem;
  }
  .v2 {
    left: 29.24rem;
    margin-top: 18rem;
  }
  .v3 {
    left: 49.32rem;
    margin-top: -10rem;
  }
  .v4 {
    left: 49.32rem;
    margin-top: 18rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 9.28688rem;
    padding: 2.5rem;
    gap: 1rem 0.5rem;

    .pay-box {
      font-size: 0.75rem;
    }

    .vp {
      justify-content: center;
      line-height: normal;
      gap: 0;

      p {
        font-size: 0.75rem;

        span {
          font-size: 0.75rem;
        }
      }

      .tiny {
        font-size: 0.25rem;
      }
    }

    .h1 {
      top: 1rem;
    }

    .h2 {
      left: 7.8rem;
      top: 1rem;
    }
    .h3 {
      left: 13rem;
      top: 1rem;
    }

    .v1 {
      left: 7rem;
      margin-top: -2rem;
    }
    .v2 {
      left: 7rem;
      margin-top: 4rem;
    }
    .v3 {
      left: 12.5rem;
      margin-top: -2rem;
    }
    .v4 {
      left: 12.5rem;
      margin-top: 4rem;
    }
  }
`;

export const ListItem = styled.li<{ $bgImg: string }>`
  background: url("${({ $bgImg }) => $bgImg}") no-repeat center;
  background-size: contain;
  width: 13.32431rem;
  height: 7.12163rem;

  @media (max-width: 768px) {
    width: 4.3125rem;
    height: 2rem;
  }
`;

export const Horizontal = styled.div`
  width: 16.08113rem;
  height: 0.25rem;
  background: #d434fe;
  position: absolute;
  margin-top: 4rem;

  @media (max-width: 768px) {
    width: 4.26694rem;
    height: 0.125rem;
  }
`;
export const Vertical = styled.div`
  width: 0.25rem;
  height: 7.02975rem;
  background: #d434fe;
  position: absolute;

  @media (max-width: 768px) {
    width: 0.125rem;
    height: 1.86525rem;
  }
`;
