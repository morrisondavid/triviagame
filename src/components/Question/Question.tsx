import React from "react";
import { IQuestionProps } from "./interfaces";
import Loader from "components/Loader/Loader";
import { QuestionContainer } from "./Question.styles";
import connect from "./Question.connect";
import Button from "components/Button/Button";
import { ButtonContainer } from "components/Button/Button.styles";

class Question extends React.PureComponent<IQuestionProps> {
  answer = (e: any) => {
    const { saveAnswer, nextQuestion, questionIndex } = this.props;
    const answer = e.target.innerText === "True";

    saveAnswer(questionIndex, answer);
    nextQuestion();
  };

  render() {
    const { question, questionCount, questionIndex } = this.props;

    if (!question)
      return (
        <QuestionContainer>
          <Loader />
        </QuestionContainer>
      );

    return (
      <QuestionContainer>
        <div>
          <h2>{`Difficulty: ${question.difficulty}`}</h2>
          <h3>{`${questionIndex + 1} of ${questionCount}`}</h3>
          <h2>{question.category}</h2>
        </div>
        <p dangerouslySetInnerHTML={{ __html: question.question }} />
        <ButtonContainer>
          <Button onClick={this.answer}>True</Button>
          <Button onClick={this.answer}>False</Button>
        </ButtonContainer>
      </QuestionContainer>
    );
  }
}

export default connect(Question);
