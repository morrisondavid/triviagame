import { IReduxThunkAction } from "../../interfaces";
import { IReduxAction } from "../../utils/interfaces";

export interface IQuestionActionCreators {
  fetchQuestions: () => IReduxThunkAction;
  reset: () => IReduxAction<null | undefined>;
  nextQuestion: () => IReduxAction<any>;
}
