import { Map } from "immutable";
import createReducer from "state/utils/createReducer";
import initialState from "state/initialState";
import ActionTypes from "./actionTypes";
import QuestionActionTypes from "state/modules/questions/actionTypes";
import { IReduxAction } from "state/utils/interfaces";
import { IAnswer } from "./interfaces";

const saveAnswer = (state: Map<number, boolean>, action: IReduxAction<IAnswer>) => {
  const { index, answer } = action.data;

  return state.set(index, answer);
};

const clear = () => {
  return Map<number, boolean>();
};

export default createReducer(initialState.answers, {
  [ActionTypes.SAVE_ANSWER]: saveAnswer,
  [QuestionActionTypes.CLEAR]: clear
});
