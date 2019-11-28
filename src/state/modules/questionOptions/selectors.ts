import { IReduxState } from "state/initialState";

export function getQuestionOptions(state: IReduxState) {
  return state.questionOptions;
}
