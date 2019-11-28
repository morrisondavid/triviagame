import { IReduxAction } from "state/utils/interfaces";
import { IQuestionDifficulty } from "data/models/interfaces";

export interface IQuestionOptionActionCreators {
  selectDifficulty: (selection: IQuestionDifficulty) => IReduxAction<IQuestionDifficulty>;
}
