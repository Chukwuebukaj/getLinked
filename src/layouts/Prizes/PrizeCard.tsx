import { PrizeCardWrapper, MedalWrapper, PrizeDetails } from "./Prizes.styled";
import { PrizeCardProps } from "./PrizesData";

const PrizeCard: React.FC<PrizeCardProps & { index: number }> = ({
  position,
  reward,
  width,
  height,
  bgImage,
  bgColor,
  borderColor,
  fontSize,
  index,
  smallWidth,
  smallHeight,
}) => {
  return (
    <PrizeCardWrapper className={index !== 1 ? "runners" : ""}>
      <MedalWrapper
        $widthSmall={smallWidth}
        $heightSmall={smallHeight}
        $bgImg={bgImage}
        $height={height}
        $width={width}
      ></MedalWrapper>
      <PrizeDetails
        $bgColor={bgColor}
        $borderColor={borderColor}
        $color={borderColor}
        $fontSize={fontSize}
      >
        <span className="position">{position}</span>
        <span className="runner">Runner</span>
        <span className="reward">&#8358;{reward}</span>
      </PrizeDetails>
    </PrizeCardWrapper>
  );
};

export default PrizeCard;
