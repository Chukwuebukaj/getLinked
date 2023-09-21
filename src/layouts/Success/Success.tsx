import { Link } from "react-router-dom";
import Button from "../../components/Button";
import {
  SuccessWrapper,
  ImagesWrapper,
  GreenCircle,
  HappyMan,
  WinkEmoji,
  SuccessContainer,
} from "./Success.styled";

const Success = () => {
  return (
    <SuccessContainer>
      <SuccessWrapper>
        <ImagesWrapper>
          <GreenCircle></GreenCircle>
          <HappyMan></HappyMan>
        </ImagesWrapper>
        <p>Congratulations</p>
        <p>you have successfully Registered!</p>
        <p className="small">Yes, it was easy and you did it!</p>
        <div className="easy">
          <p className="small">check your mail box for next step</p>{" "}
          <WinkEmoji></WinkEmoji>
        </div>
        <Link to={"/"}>
          <Button children="Back" />
        </Link>
      </SuccessWrapper>
    </SuccessContainer>
  );
};

export default Success;
