import { IQuestionActionCreators } from "./interfaces";
import { IReduxState } from "state/initialState";
import ActionTypes from "./actionTypes";
import api from "data/api/api";
import { getQuestionOptions } from "../questionOptions/selectors";

class QuestionActionCreators implements IQuestionActionCreators {
  fetchQuestions() {
    return async (dispatch: any, getState: () => IReduxState) => {
      const state = getState();
      const queryObject = getQuestionOptions(state);
      const result = await api.getQuestions(queryObject);

      if (result.success) {
        dispatch({
          type: ActionTypes.INITIALISE_QUESTIONS,
          data: result.value
        });
      } else {
        throw new Error(result.errors[0]);
      }
    };
  }

  nextQuestion = () => ({ type: ActionTypes.NEXT_QUESTION });

  reset = () => ({ type: ActionTypes.CLEAR });
}

export default new QuestionActionCreators();
