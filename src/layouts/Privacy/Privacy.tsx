import Button from "../../components/Button";
import PurpleOverLay from "../../components/PurpleOverLay";
import {
  PrivacyWrapper,
  PrivacyLeft,
  Top,
  Bottom,
  PrivacyRight,
  Terms,
} from "./Privacy.styled";
import { bottomPara, terms, topPara } from "./PrivacyData";

const Privacy = () => {
  return (
    <PrivacyWrapper>
      <PrivacyLeft>
        <Top>
          <p className="privacy">
            Privacy Policy and
            <span>Terms</span>
          </p>
          <span className="last-updated">
            Last updated on September 12, 2023
          </span>
          <p>{topPara}</p>
        </Top>
        <Bottom>
          <p>{bottomPara}</p>
          <span className="lp">Licensing Policy</span>
          <span>Here are terms of our Standard License:</span>
          <Terms>
            {terms.map((term, index) => (
              <li key={index}>
                {term.icon} <p>{term.content}</p>
              </li>
            ))}
          </Terms>
          <Button children="Read More" />
        </Bottom>
        <PurpleOverLay className="overlay-pr" />
      </PrivacyLeft>
      <PrivacyRight></PrivacyRight>
    </PrivacyWrapper>
  );
};

export default Privacy;
