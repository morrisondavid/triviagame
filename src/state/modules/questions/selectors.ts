import { IReduxState } from "../../initialState";

export function getQuestions(state: IReduxState) {
  return state.questions.questions;
}

export function getCurrentQuestion(state: IReduxState) {
  const index = state.questions.currentQuestionIndex;
  if (index < 0) {
    return undefined;
  }

  return state.questions.questions[index];
}

export function getCurrentQuestionIndex(state: IReduxState) {
  return state.questions.currentQuestionIndex;
}

export function getQuestionCount(state: IReduxState) {
  return state.questions.questions.length;
}

export function isGameComplete(state: IReduxState) {
  const index = getCurrentQuestionIndex(state);
  const questionCount = getQuestionCount(state);

  return questionCount > 9 && index > questionCount - 1;
}
