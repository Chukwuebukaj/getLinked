import styled from "styled-components";

interface QuestionMarkProps {
  fontSize: string;
  borderColor: string;
  className: string;
}

const QuestionMark: React.FC<QuestionMarkProps> = ({
  fontSize,
  borderColor,
  className,
}) => {
  return (
    <QuestionWrapper
      className={className}
      $borderColor={borderColor}
      $fontSize={fontSize}
    >
      ?
    </QuestionWrapper>
  );
};

export default QuestionMark;

const QuestionWrapper = styled.span<{
  $fontSize: string;
  $borderColor: string;
}>`
  font-size: ${({ $fontSize }) => $fontSize};
  position: absolute;
  color: transparent;
  -webkit-text-stroke: 1px ${({ $borderColor }) => $borderColor};
  font-weight: 500;
  font-family: "MADE TOMMY Outline", sans-serif;
  z-index:-1;
`;
