import { IReduxAction } from "state/utils/interfaces";

export interface IAnswersActionCreators {
  saveAnswer: (index: number, answer: boolean) => IReduxAction<IAnswer>;
}

export interface IAnswer {
  index: number;
  answer: boolean;
}
