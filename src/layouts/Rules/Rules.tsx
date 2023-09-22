import { RulesWrapper, RulesLeft, RulesRight } from "./Rules.styled";
import { rulesDetails } from "./RulesData";
import bgImage from "../../assets/7450159-1.png";
import { GreyStarSmall, WhiteStarSmall } from "../../components/TinyImages";

const Rules = () => {
  return (
    <RulesWrapper>
      <RulesLeft>
        <span>Rules and</span>
        <span className="purple">Guidelines</span>
        <p>{rulesDetails}</p>
      </RulesLeft>
      <RulesRight $bgImg={bgImage}></RulesRight>
      <GreyStarSmall className={"grey"}/>
      <WhiteStarSmall className={"white"}/>
      <WhiteStarSmall className={"white1"}/>
    </RulesWrapper>
  );
};

export default Rules;
