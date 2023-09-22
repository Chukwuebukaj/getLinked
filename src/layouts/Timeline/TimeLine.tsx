import {
  GreyStarSmall,
  PurpleStarSmall,
  WhiteStarSmall,
} from "../../components/TinyImages";
import { TimelineWrapper, TimeLineTop, TimeLineBody } from "./TimeLine.styled";
import { timeLineInfo, topPara } from "./TimeLineData";

const TimeLine = () => {
  return (
    <TimelineWrapper id="timeline">
      <TimeLineTop>
        <span>Timeline</span>
        <p>{topPara}</p>
      </TimeLineTop>
      <TimeLineBody>
        {timeLineInfo.map((info, index) => (
          <li key={index} className={index % 2 !== 0 ? "reverse" : ""}>
            <div className="left">
              <span>{info.left.title}</span>
              {info.left.content && <p>{info.left.content}</p>}
            </div>
            <div
              className={`line ${
                index === 0 ? "first-line" : index % 2 !== 0 ? "odd" : ""
              }`}
            ></div>
            <div className={`center ${index === 0 ? "first" : ""}`}>
              {index + 1}
            </div>
            <div className="right">
              <span>{info.right.title}</span>
              {info.right.content && <p>{info.right.content}</p>}
            </div>
          </li>
        ))}
      </TimeLineBody>
      <PurpleStarSmall className={"purple"} />
      <WhiteStarSmall className={"white"} />
      <GreyStarSmall className={"grey"} />
    </TimelineWrapper>
  );
};

export default TimeLine;
