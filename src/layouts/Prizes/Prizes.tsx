import {
  PrizesWrapper,
  PrizesTop,
  PrizesBody,
  PrizesLeft,
  PrizesRight,
} from "./Prizes.styled";
import { prizeCardData, topPara } from "./PrizesData";
import leftBgImg from "../../assets/9486889-1.png";
import PrizeCard from "./PrizeCard";
import PurpleOverLay from "../../components/PurpleOverLay";

const Prizes = () => {
  return (
    <PrizesWrapper>
      <PrizesTop>
        <p className="title">
          Prizes and <br />
          <span>Rewards</span>
        </p>
        <p>{topPara}</p>
      </PrizesTop>
      <PrizesBody>
        <PrizesLeft $bgImg={leftBgImg}>
          <PurpleOverLay className={"overlayP1"} />
        </PrizesLeft>
        <PrizesRight>
          {prizeCardData.map((data, index) => (
            <PrizeCard
              key={index}
              position={data.position}
              reward={data.reward}
              width={data.width}
              height={data.height}
              bgImage={data.bgImage}
              bgColor={data.bgColor}
              borderColor={data.borderColor}
              fontSize={data.fontSize}
              index={index}
            />
          ))}
          <PurpleOverLay className={"overlayP2"} />
        </PrizesRight>
      </PrizesBody>
    </PrizesWrapper>
  );
};

export default Prizes;
