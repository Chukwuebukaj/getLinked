import styled from "styled-components";

export const TimelineWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13.38rem;
  padding: 4.5rem 4.69rem 2.62rem 4.69rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  position: relative;
  height:auto;

  .white,
  .grey {
    width: 1.625rem;
    height: 2rem;
    flex-shrink: 0;
  }

  .purple {
    width: 1.875rem;
    height: 2.25rem;
    flex-shrink: 0;
    left: 21.12rem;
    top: 16.63rem;
  }

  .white {
    left: 76.25rem;
    top: 45.87rem;
  }

  .grey {
    left: 11.06rem;
    top: 77.75rem;
  }
`;

export const TimeLineTop = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 21.625rem;

  span {
    font-family: Clash Display;
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    font-family: Montserrat;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 172.4%; /* 1.5085rem */
  }
`;

export const TimeLineBody = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5.44rem;

  li {
    display: flex;
    gap: 5.37rem;
    align-items: center;
  }

  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    justify-content: center;
  }

  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    justify-content: center;
  }

  .center {
    width: 3.3125rem;
    height: 3.3125rem;
    flex-shrink: 0;
    border-radius: 50%;
    background: linear-gradient(270deg, #903aff 0%, #d434fe 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: normal;
  }

  .line {
    width: 0.25rem;
    height: 5.375rem;
    background: #d434fe;
    position: absolute;
    left: 45rem;
    margin-top: -10rem;
  }

  .first-line {
    height: 8.5625rem;
    margin-bottom: 3rem;
  }

  span {
    color: #d434fe;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: normal;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 170.9%; /* 1.709rem */
  }
`;
