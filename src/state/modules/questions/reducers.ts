import createReducer from "../../utils/createReducer";
import initialState from "../../initialState";
import ActionTypes from "./actionTypes";
import { IReduxAction } from "../../utils/interfaces";
import { RecordOf } from "immutable";
import { IQuestionList } from "../../../data/models/interfaces";
import QuestionList from "../../../data/models/QuestionList";

const clear = () => {
  return new QuestionList();
};

const init = (state: RecordOf<IQuestionList>, action: IReduxAction<RecordOf<IQuestionList>>) => {
  return action.data;
};

const next = (state: RecordOf<IQuestionList>) => {
  return state.set("currentQuestionIndex", state.currentQuestionIndex + 1);
};

export default createReducer(initialState.questionOptions, {
  [ActionTypes.CLEAR]: clear,
  [ActionTypes.INITIALISE_QUESTIONS]: init,
  [ActionTypes.NEXT_QUESTION]: next
});
