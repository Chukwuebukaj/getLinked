import { RulesWrapper, RulesLeft, RulesRight } from "./Rules.styled";
import { rulesDetails } from "./RulesData";
import bgImage from "../../assets/7450159-1.png";

const Rules = () => {
  return (
    <RulesWrapper>
      <RulesLeft>
        <span>Rules and</span>
        <span className="purple">Guidelines</span>
        <p>{rulesDetails}</p>
      </RulesLeft>
      <RulesRight $bgImg={bgImage}></RulesRight>
    </RulesWrapper>
  );
};

export default Rules;
