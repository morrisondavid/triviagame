import { IQuestion } from "data/models/interfaces";
import { IReduxAction } from "state/utils/interfaces";

export interface IQuestionConnectedProps {
  question: IQuestion;
  questionIndex: number;
  questionCount: number;
}

export interface IQuestionDispatchFunctions {
  saveAnswer: (index: number, answer: boolean) => IReduxAction<any>;
  nextQuestion: () => IReduxAction<any>;
}

export type IQuestionProps = IQuestionConnectedProps & IQuestionDispatchFunctions;
