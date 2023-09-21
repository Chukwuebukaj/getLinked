import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { HeroBody, HeroRight, HeroWrapper, Info, OverLay } from "./Hero.styled";

const Hero = () => {
  return (
    <HeroWrapper>
      <span className="hero-top">Igniting a Revolution in HR Innovation</span>
      <HeroBody>
        <Info>
          <span className="get-linked">getlinked Tech</span>
          <p className="get-linked">
            Hackathon <span className="purple">1.0</span>
          </p>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Link to={"register"}>
            <Button children="Register" />
          </Link>
          <div className="count-down">
            <p>
              00<span>H</span>
            </p>
            <p>
              00<span>M</span>
            </p>
            <p>
              00<span>S</span>
            </p>
          </div>
        </Info>
        <HeroRight>
          <OverLay></OverLay>
        </HeroRight>
      </HeroBody>
    </HeroWrapper>
  );
};

export default Hero;
