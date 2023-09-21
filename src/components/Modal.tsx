import { ReactNode } from "react";
import styled from "styled-components";
import { GreyStarSmall, PinkStarSmall, PurpleStarSmall } from "./TinyImages";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <ModalWrapper>
      {children}
      <PurpleStarSmall className={"purple"} />
      <GreyStarSmall className={"grey"} />
      <PinkStarSmall className={"pink"} />
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(21, 14, 40, 0.93);
  z-index: 999;

  .purple {
    width: 1.4375rem;
    height: 1.75rem;
    flex-shrink: 0;
    top: 2.56rem;
    left: 66.9rem;
  }

  .grey {
    width: 1.625rem;
    height: 2rem;
    flex-shrink: 0;
    top: 19rem;
    left: 30.9rem;
  }

  .pink {
    width: 1.3125rem;
    height: 1.5625rem;
    flex-shrink: 0;
    top: 42.6rem;
    left: 63.8rem;
  }
`;
