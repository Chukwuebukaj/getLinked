import { FAQWrapper, FAQLeft, FAQRight, QuestionsList } from "./FAQs.styled";
import { bold, gotAnswers, questions } from "./FAQsData";
import bgImage from "../../assets/cwok-casual-21-1.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const FAQs = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  return (
    <FAQWrapper>
      <FAQLeft>
        <span className="top">Frequently Asked</span>
        <span className="top purple">Questions</span>
        <p>
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
    </FAQWrapper>
  );
};

export default FAQs;
