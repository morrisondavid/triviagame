import createReducer from "../../utils/createReducer";
import initialState from "../../initialState";
import ActionTypes from "./actionTypes";

const toggle = (state: boolean) => !state;

export default createReducer(initialState.snowThemeSelected, {
  [ActionTypes.TOGGLE_THEME]: toggle
});
