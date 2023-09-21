import { IntroWrapper, IntroLeft, IntroRight } from "./Intro.styled";
import { hackathonDetails } from "./IntroData";
import bgImg from "../../assets/the-big-idea-1.png";
import {
  CurlyArrow,
  PinkStarSmall,
  PurpleStarBig,
} from "../../components/TinyImages";

const Intro = () => {
  return (
    <IntroWrapper id="overview">
      <IntroLeft $bgImg={bgImg}>
        <p>The Big Idea!</p>
      </IntroLeft>
      <IntroRight>
        <span>Introduction to getlinked</span>
        <span className="purple">tech Hackathon 1.0</span>
        <p>{hackathonDetails}</p>
      </IntroRight>
      <PinkStarSmall className={"small-pink"} />
      <PurpleStarBig className={"big-purple"} />
      <CurlyArrow className={"curly"} />
    </IntroWrapper>
  );
};

export default Intro;
