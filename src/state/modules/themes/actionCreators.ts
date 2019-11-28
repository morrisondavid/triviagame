import { IThemeActionCreators } from "./interfaces";
import ActionTypes from "./actionTypes";

class ThemeActionCreators implements IThemeActionCreators {
  toggleSnow() {
    return { type: ActionTypes.TOGGLE_THEME };
  }
}

export default new ThemeActionCreators();
