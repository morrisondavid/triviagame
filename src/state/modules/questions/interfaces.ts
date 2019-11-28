import { IReduxThunkAction } from "state/interfaces";
import { IReduxAction } from "state/utils/interfaces";

export interface IQuestionActionCreators {
  fetchQuestions: () => IReduxThunkAction;
  reset: () => IReduxAction<null | undefined>;
  nextQuestion: () => IReduxAction<any>;
}
