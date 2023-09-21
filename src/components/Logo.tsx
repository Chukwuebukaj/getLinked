import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  return (
    <Link to={"/"} style={{color:'inherit'}}>
      <LogoWrapper>
        get
        <span>linked</span>
      </LogoWrapper>
    </Link>
  );
};

export default Logo;

const LogoWrapper = styled.p`
  font-family: Clash Display;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  font-size: 2.25rem;
  font-weight: 700;

  span {
    color: #d434fe;
  }
`;
