import ActionTypes from "./actionTypes";
import { IQuestionOptionActionCreators } from "./interfaces";
import { IQuestionDifficulty } from "../../../data/models/interfaces";

class QuestionOptionActionCreators implements IQuestionOptionActionCreators {
  selectDifficulty(selection: IQuestionDifficulty) {
    return {
      type: ActionTypes.SELECT_DIFFICULTY,
      data: selection
    };
  }
}

//Exported as a singleton instance
export default new QuestionOptionActionCreators();
