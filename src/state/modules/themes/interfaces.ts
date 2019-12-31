import { IReduxAction } from "../../utils/interfaces";

export interface IThemeActionCreators {
  toggleSnow: () => IReduxAction<null>;
}
