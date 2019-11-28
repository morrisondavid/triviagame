import { IReduxAction } from "state/utils/interfaces";

export interface IThemeActionCreators {
  toggleSnow: () => IReduxAction<null>;
}
