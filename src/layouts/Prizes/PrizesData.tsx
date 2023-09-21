import silver from "../../assets/silver-medal-1.png";
import gold from "../../assets/gold-medal-1.png";
import bronze from "../../assets/bronze-medal-1.png";

export interface PrizeCardProps {
  position: string;
  reward: string;
  width: string;
  height: string;
  bgImage: string;
  bgColor: string;
  borderColor: string;
  fontSize: string;
}

export const topPara: string =
  "Highlight of the prizes and rewards for winners and for participants";

export const prizeCardData: PrizeCardProps[] = [
  {
    position: "2nd",
    reward: "300,000",
    width: "11.1875rem",
    height: "11.25rem",
    bgImage: silver,
    bgColor: "rgba(212, 52, 254, 0.12)",
    borderColor: "#D434FE",
    fontSize: "2.25rem",
  },
  {
    position: "1st",
    reward: "400,000",
    width: "18.5rem",
    height: "18.5rem",
    bgImage: gold,
    bgColor: "rgba(144, 58, 255, 0.12)",
    borderColor: "#903AFF",
    fontSize: "2.5rem",
  },
  {
    position: "3rd",
    reward: "150,000",
    width: "11.1875rem",
    height: "11.25rem",
    bgImage: bronze,
    bgColor: "rgba(212, 52, 254, 0.12)",
    borderColor: "#D434FE",
    fontSize: "2.25rem",
  },
];
