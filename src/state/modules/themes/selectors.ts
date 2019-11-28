import { IReduxState } from "state/initialState";

export function isSnowEnabled(state: IReduxState) {
  return state.snowThemeSelected;
}
