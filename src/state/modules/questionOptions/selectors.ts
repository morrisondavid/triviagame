import { IReduxState } from "../../initialState";

export function getQuestionOptions(state: IReduxState) {
  return state.questionOptions;
}
