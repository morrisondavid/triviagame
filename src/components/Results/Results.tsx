import React from "react";
import { IResultsProps } from "./interfaces";
import { ResultsContainer } from "./Reults.styles";
import connect from "./Results.connect";
import Button from "components/Button/Button";
import { IQuestion } from "data/models/interfaces";
import classnames from "classnames";
import Routes from "constants/Routes";

class Results extends React.PureComponent<IResultsProps> {
  click = () => {
    const { reset, history } = this.props;

    reset();
    history.push(Routes.DIFFICULTY);
  };

  renderResults() {
    const { questions, answers } = this.props;

    return questions.map((q: IQuestion, i: number) => {
      const correctAnswer = q.correct_answer.toLowerCase() === "true";
      const classes = classnames({ correct: answers.get(i) === correctAnswer });

      return <p key={i} className={classes} dangerouslySetInnerHTML={{ __html: q.question }} />;
    });
  }

  render() {
    const { correctAnswersCount, questions } = this.props;

    return (
      <ResultsContainer>
        <div>
          <h2>{"You Scored"}</h2>
          <h3>{`${correctAnswersCount} of ${questions.length}`}</h3>
        </div>
        {this.renderResults()}
        <Button onClick={this.click}>Play Again?</Button>
      </ResultsContainer>
    );
  }
}

export default connect(Results);
