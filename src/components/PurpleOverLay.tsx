import styled from "styled-components";
import bgImage from "../assets/purple-lens-flare-png.png";

const PurpleOverLay = ({ className }: { className: string }) => {
  return <Wrapper className={className}></Wrapper>;
};

export default PurpleOverLay;

const Wrapper = styled.div`
  background: url("${bgImage}") no-repeat center;
  background-size: 100% 100%;
  position: absolute;
  background-color: transparent;
  background-blend-mode: hard-light;
  // border-radius: 50%;
`;
