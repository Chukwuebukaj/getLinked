import PurpleOverLay from "../../components/PurpleOverLay";
import {
  PinkStarSmall,
  PurpleStarSmall,
  WhiteStarSmall,
} from "../../components/TinyImages";
import {
  PartnersWrapper,
  PartnersTop,
  PartnersList,
  ListItem,
  Horizontal,
  Vertical,
} from "./Partners.styled";
import { partnersLogo, topData } from "./PartnersData";

const Partners = () => {
  return (
    <PartnersWrapper>
      <PartnersTop>
        <span>{topData.title}</span>
        <p>{topData.content}</p>
      </PartnersTop>
      <PartnersList>
        <HorizontalLine className={"h1"} />
        <HorizontalLine className={"h2"} />
        <HorizontalLine className={"h3"} />
        <VerticalLine className={"v1"} />
        <VerticalLine className={"v2"} />
        <VerticalLine className={"v3"} />
        <VerticalLine className={"v4"} />
        {partnersLogo.map((logo, index) => (
          <ListItem $bgImg={logo} key={index}></ListItem>
        ))}
        <p className="pay-box">
          Pay<span>box</span>
        </p>
        <div className="vp">
          <p>
            Vuzual <span>Plus</span>
          </p>
          <span className="tiny">Design Studios</span>
        </div>
      </PartnersList>
      <PurpleOverLay className={"overlay-ps"} />
      <PurpleOverLay className={"overlay-ps overlay-ps1"} />
      <PurpleStarSmall className={"purple"} />
      <PinkStarSmall className={"pink"} />
      <WhiteStarSmall className={"white"} />
    </PartnersWrapper>
  );
};

export default Partners;

const HorizontalLine = ({ className }: { className: string }) => {
  return <Horizontal className={className}></Horizontal>;
};

const VerticalLine = ({ className }: { className: string }) => {
  return <Vertical className={className}></Vertical>;
};
