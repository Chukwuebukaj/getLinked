import blast from "../assets/1f-4a-5.png";
import curlyArrow from "../assets/arrow.png";
import chain from "../assets/chain-9365116-7621444.png";
import lightBulb from "../assets/creative-1.png";
import metrix from "../assets/metrix-1.png";
import pinkStarBig from "../assets/sata-gra-2.png";
import pinkStarSmall from "../assets/sata-gra.png";
import greyStarSmall from "../assets/star-5.png";
import greyStarBig from "../assets/star-6.png";
import whiteStarBig from "../assets/star-10.png";
import whiteStarSmall from "../assets/star.png";
import blackStar from "../assets/star-outlin.png";
import purpleStarBig from "../assets/star-pu-1.png";
import purpleStarSmall from "../assets/star-pu.png";
import curvedLine from "../assets/vector-4.svg";
import privacyImage from "../assets/vector.svg";

export const Blast = ({ className }: { className: string }) => {
  return (
    <img
      style={{ position: "absolute" }}
      className={`animated ${className}`}
      src={blast}
      alt="tiny"
    />
  );
};

export const CurvedLine = ({ className }: { className: string }) => {
  return (
    <img
      style={{ position: "absolute" }}
      className={className}
      src={curvedLine}
      alt="tiny"
    />
  );
};

export const CurlyArrow = ({ className }: { className: string }) => {
  return (
    <img
      style={{ position: "absolute" }}
      className={className}
      src={curlyArrow}
      alt="tiny"
    />
  );
};

export const Chain = ({ className }: { className: string }) => {
  return (
    <img
      style={{ position: "absolute" }}
      className={className}
      src={chain}
      alt="tiny"
    />
  );
};

export const LightBulb = ({ className }: { className: string }) => {
  return (
    <img
      style={{ position: "absolute" }}
      className={`animated ${className}`}
      src={lightBulb}
      alt="tiny"
    />
  );
};

export const Metrix = ({ className }: { className: string }) => {
  return (
    <img
      style={{ position: "absolute" }}
      className={className}
      src={metrix}
      alt="tiny"
    />
  );
};

export const PinkStarBig = ({ className }: { className: string }) => {
  return (
    <img
      style={{ position: "absolute" }}
      className={`animated ${className}`}
      src={pinkStarBig}
      alt="tiny"
    />
  );
};

export const PinkStarSmall = ({ className }: { className: string }) => {
  return (
    <img
      style={{ position: "absolute" }}
      className={`animated ${className}`}
      src={pinkStarSmall}
      alt="tiny"
    />
  );
};

export const GreyStarBig = ({ className }: { className: string }) => {
  return (
    <img
      style={{ position: "absolute" }}
      className={`animated ${className}`}
      src={greyStarBig}
      alt="tiny"
    />
  );
};

export const GreyStarSmall = ({ className }: { className: string }) => {
  return (
    <img
      style={{ position: "absolute" }}
      className={`animated ${className}`}
      src={greyStarSmall}
      alt="tiny"
    />
  );
};

export const WhiteStarBig = ({ className }: { className: string }) => {
  return (
    <img
      style={{ position: "absolute" }}
      className={`animated ${className}`}
      src={whiteStarBig}
      alt="tiny"
    />
  );
};

export const WhiteStarSmall = ({ className }: { className: string }) => {
  return (
    <img
      style={{ position: "absolute" }}
      className={`animated ${className}`}
      src={whiteStarSmall}
      alt="tiny"
    />
  );
};

export const BlackStar = ({ className }: { className: string }) => {
  return (
    <img
      style={{ position: "absolute" }}
      className={`animated ${className}`}
      src={blackStar}
      alt="tiny"
    />
  );
};

export const PurpleStarBig = ({ className }: { className: string }) => {
  return (
    <img
      style={{ position: "absolute" }}
      className={`animated ${className}`}
      src={purpleStarBig}
      alt="tiny"
    />
  );
};

export const PurpleStarSmall = ({ className }: { className: string }) => {
  return (
    <img
      style={{ position: "absolute" }}
      className={`animated ${className}`}
      src={purpleStarSmall}
      alt="tiny"
    />
  );
};

export const PrivacyImage = ({ className }: { className: string }) => {
  return (
    <img
      style={{ position: "absolute" }}
      className={className}
      src={privacyImage}
      alt="large"
    />
  );
};
