import ActionTypes from "./actionTypes";
import { IAnswersActionCreators } from "./interfaces";

class AnswersActionCreators implements IAnswersActionCreators {
  saveAnswer(index: number, answer: boolean) {
    return {
      type: ActionTypes.SAVE_ANSWER,
      data: { index, answer }
    };
  }
}

//Exported as a singleton instance
export default new AnswersActionCreators();
