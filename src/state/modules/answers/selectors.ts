import { IReduxState } from "state/initialState";
import { IQuestion } from "data/models/interfaces";

export function getAnswers(state: IReduxState) {
  return state.answers;
}

export function getCorrectAnswersCount(state: IReduxState) {
  const answers = getAnswers(state);

  const correct = state.questions.questions.filter((q: IQuestion, i: number) => {
    const correctAnswer = q.correct_answer.toLowerCase() === "true";

    return answers.get(i) === correctAnswer;
  });

  return correct.length;
}
