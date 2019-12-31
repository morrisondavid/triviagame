import createReducer from "../../utils/createReducer";
import initialState from "../../initialState";
import ActionTypes from "./actionTypes";
import { IReduxAction } from "../../utils/interfaces";
import { RecordOf } from "immutable";
import { IQuestionOptions, IQuestionDifficulty } from "data/models/interfaces";

const updateOptions = (
  state: RecordOf<IQuestionOptions>,
  action: IReduxAction<IQuestionDifficulty>
) => {
  return state.set("difficulty", action.data);
};

export default createReducer(initialState.questionOptions, {
  [ActionTypes.SELECT_DIFFICULTY]: updateOptions
});
