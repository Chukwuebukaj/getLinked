import { IntroWrapper, IntroLeft, IntroRight } from "./Intro.styled";
import { hackathonDetails } from "./IntroData";
import bgImg from "../../assets/the-big-idea-1.png";

const Intro = () => {
  return (
    <IntroWrapper>
      <IntroLeft $bgImg={bgImg}>
        <p>The Big Idea!</p>
      </IntroLeft>
      <IntroRight>
        <span>Introduction to getlinked</span>
        <span className="purple">tech Hackathon 1.0</span>
        <p>{hackathonDetails}</p>
      </IntroRight>
    </IntroWrapper>
  );
};

export default Intro;
