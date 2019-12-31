import { IReduxState } from "../../initialState";

export function isSnowEnabled(state: IReduxState) {
  return state.snowThemeSelected;
}
