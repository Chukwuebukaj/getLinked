import styled from "styled-components";
import Hero from "../../layouts/Hero/Hero";
import Intro from "../../layouts/Intro/Intro";
import Rules from "../../layouts/Rules/Rules";
import JudgingCriteria from "../../layouts/JudgingCriteria/JudgingCriteria";
import FAQs from "../../layouts/FAQs/FAQs";
import TimeLine from "../../layouts/Timeline/TimeLine";
import Prizes from "../../layouts/Prizes/Prizes";
import Partners from "../../layouts/Partners/Partners";
import Privacy from "../../layouts/Privacy/Privacy";
import Footer from "../../layouts/Footer/Footer";
import PurpleOverLay from "../../components/PurpleOverLay";

const Landing = () => {
  return (
    <LandingPageWrapper>
      <PurpleOverLay className={"overlay1"} />
      <Hero />
      <Intro />
      <PurpleOverLay className={"overlay2"} />
      <Rules />
      <PurpleOverLay className={"overlay3"} />
      <JudgingCriteria />
      <PurpleOverLay className={"overlay4"} />
      <FAQs />
      <TimeLine />
      <Prizes />
      <Partners />
      <Privacy />
      <Footer />
    </LandingPageWrapper>
  );
};

export default Landing;

const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #150e28;
  overflow: hidden;
  width: 100vw;
  position: relative;
  z-index: 2;

  .overlay1 {
    width: 67.875rem;
    height: 52.25rem;
    flex-shrink: 0;
  }

  .overlay2 {
    width: 64.8125rem;
    height: 59.25rem;
    flex-shrink: 0;
    top: 90rem;
  }
  .overlay3 {
    width: 64.8125rem;
    height: 59.25rem;
    flex-shrink: 0;
    top: 110rem;
    left: 68rem;
    z-index: -1;
  }

  .overlay4 {
    width: 44.8125rem;
    height: 39.25rem;
    flex-shrink: 0;
    top: 190rem;
    left: 60rem;
    background-blend-mode: hard-light;
    z-index: -1;
  }
`;
