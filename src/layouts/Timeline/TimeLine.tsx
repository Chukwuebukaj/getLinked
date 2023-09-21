import { TimelineWrapper, TimeLineTop, TimeLineBody } from "./TimeLine.styled";
import { timeLineInfo, topPara } from "./TimeLineData";

const TimeLine = () => {
  return (
    <TimelineWrapper>
      <TimeLineTop>
        <span>Timeline</span>
        <p>{topPara}</p>
      </TimeLineTop>
      <TimeLineBody>
        {timeLineInfo.map((info, index) => (
          <li key={index}>
            <div className="left">
              <span>{info.left.title}</span>
              {info.left.content && <p>{info.left.content}</p>}
            </div>
            <div className={`line ${index === 0 ? "first-line" : ""}`}></div>
            <div className="center">{index + 1}</div>
            <div className="right">
              <span>{info.right.title}</span>
              {info.right.content && <p>{info.right.content}</p>}
            </div>
          </li>
        ))}
      </TimeLineBody>
    </TimelineWrapper>
  );
};

export default TimeLine;
