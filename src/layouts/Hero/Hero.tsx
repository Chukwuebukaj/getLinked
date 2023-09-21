import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { HeroBody, HeroRight, HeroWrapper, Info, OverLay } from "./Hero.styled";
import {
  Blast,
  Chain,
  CurvedLine,
  GreyStarSmall,
  LightBulb,
  Metrix,
  WhiteStarSmall,
} from "../../components/TinyImages";
import { calculateTimeRemaining } from "../../components/CountDownTimer";

const Hero = () => {
  const [time, setTime] = useState(calculateTimeRemaining());

  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      setTime(calculateTimeRemaining());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

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
              {time.days.toString().length === 1 ? `0${time.days}` : time.days}
              <span>D</span>
            </p>
            <p>
              {time.hours.toString().length === 1
                ? `0${time.hours}`
                : time.hours}
              <span>H</span>
            </p>
            <p>
              {time.minutes.toString().length === 1
                ? `0${time.minutes}`
                : time.minutes}
              <span>M</span>
            </p>
            <p>
              {time.seconds.toString().length === 1
                ? `0${time.seconds}`
                : time.seconds}
              <span>S</span>
            </p>
          </div>
        </Info>
        <HeroRight>
          <OverLay></OverLay>
        </HeroRight>
      </HeroBody>
      <Metrix className={"metrix"} />
      <CurvedLine className={"curvedLine"} />
      <WhiteStarSmall className={"whitestar"} />
      <GreyStarSmall className={"greystar-top"} />
      <GreyStarSmall className={"greystar-bottom"} />
      <LightBulb className={"lightbulb"} />
      <Chain className={"chain"} />
      <Blast className={"blast"} />
    </HeroWrapper>
  );
};

export default Hero;
