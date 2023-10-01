import styled from "styled-components";
import Button from "../components/Button";
import { BsArrowUpCircle } from "react-icons/bs";
import { useEffect, useState } from "react";

const BackToTopBtn = () => {
  const [showButton, setShowButton] = useState(false);

  const goBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <BtnWrapper>
          <Button
            onClick={goBackToTop}
            title="Back to top"
            children={<BsArrowUpCircle />}
          />
        </BtnWrapper>
      )}
    </>
  );
};

export default BackToTopBtn;

const BtnWrapper = styled.div`
  position: fixed;
  bottom: 0.5rem;
  right: 0.5rem;
  z-index: 99999;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d434fe;

  button {
    background: transparent;
    color: #fff;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: transparent;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
