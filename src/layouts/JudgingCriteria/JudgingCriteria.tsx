import {
  JCWrapper,
  JCLeft,
  JCRight,
  CriteriaList,
} from "./JudgingCriteria.styled";
import bgImage from "../../assets/8046554-1.png";
import { judgingData } from "./JudgingCriteriaData";
import Button from "../../components/Button";
import PurpleOverLay from "../../components/PurpleOverLay";

const JudgingCriteria = () => {
  return (
    <JCWrapper>
      <JCLeft $bgImg={bgImage}>
        <PurpleOverLay className={"overlay"} />
      </JCLeft>
      <JCRight>
        <span className="top">Judging Criteria</span>
        <span className="top purple">Key attributes</span>
        <CriteriaList>
          {judgingData.map((item, index) => (
            <li key={index}>
              <span className="title">{item.title}</span>:{" "}
              <span>{item.content}</span>
            </li>
          ))}
        </CriteriaList>
        <Button children="Read More" />
      </JCRight>
      {/* <PurpleOverLay className={"overlay-jc"} /> */}
    </JCWrapper>
  );
};

export default JudgingCriteria;
