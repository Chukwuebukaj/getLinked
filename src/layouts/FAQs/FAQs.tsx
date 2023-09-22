import { FAQWrapper, FAQLeft, FAQRight, QuestionsList } from "./FAQs.styled";
import { bold, gotAnswers, questions } from "./FAQsData";
import bgImage from "../../assets/cwok-casual-21-1.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import QuestionMark from "../../components/QuestionMark";
import {
  GreyStarSmall,
  PinkStarSmall,
  PurpleStarSmall,
  WhiteStarSmall,
} from "../../components/TinyImages";

const FAQs = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  return (
    <FAQWrapper id="faqs">
      <FAQLeft>
        <span className="top">Frequently Asked</span>
        <span className="top purple">Questions</span>
        <p className="got-answers">
          {gotAnswers} <span>{bold}</span>
        </p>
        <QuestionsList>
          {questions.map((question, index) => (
            <li
              key={index}
              onClick={
                currentIndex === index
                  ? () => setCurrentIndex(-1)
                  : () => setCurrentIndex(index)
              }
            >
              <div>
                <span className={index === currentIndex ? "open" : ""}>
                  {question.question}
                </span>
                {currentIndex === index && <p>{question.answer}</p>}
              </div>
              {currentIndex === index ? (
                <AiOutlineMinus className="minus" />
              ) : (
                <AiOutlinePlus />
              )}
            </li>
          ))}
        </QuestionsList>
      </FAQLeft>
      <FAQRight $bgImg={bgImage}></FAQRight>
      <QuestionMark
        fontSize={"6rem"}
        borderColor={"#A866FD"}
        className={"question1"}
      />
      <QuestionMark
        fontSize={"8rem"}
        borderColor={"#D434FE"}
        className={"question2"}
      />
      <QuestionMark
        fontSize={"6rem"}
        borderColor={"#A866FD"}
        className={"question3"}
      />
      <PurpleStarSmall className={"purple-icon"} />
      <PinkStarSmall className={"pink"} />
      <PinkStarSmall className={"pink pink1"} />
      <GreyStarSmall className={"grey"} />
      <WhiteStarSmall className={"white"} />
    </FAQWrapper>
  );
};

export default FAQs;
