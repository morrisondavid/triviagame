import { Map, RecordOf } from "immutable";
import { IQuestionOptions, IQuestionList } from "data/models/interfaces";
import QuestionOptions from "data/models/QuestionOptions";
import QuestionList from "data/models/QuestionList";

export interface IReduxState {
  questionOptions: RecordOf<IQuestionOptions>;
  questions: IQuestionList;
  snowThemeSelected: boolean;
  answers: Map<number, boolean>;
}

export function newState(): IReduxState {
  return {
    questionOptions: new QuestionOptions(),
    questions: new QuestionList([]),
    answers: Map<number, boolean>(),
    snowThemeSelected: true
  };
}

const initialState = newState();

export default initialState;
