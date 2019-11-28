import { combineReducers } from "redux";
import questionsReducer from "state/modules/questions/reducers";
import questionOptionsReducer from "state/modules/questionOptions/reducers";
import answersReducer from "state/modules/answers/reducers";
import themesReducer from "state/modules/themes/reducers";

const reducers = combineReducers({
  questions: questionsReducer,
  questionOptions: questionOptionsReducer,
  answers: answersReducer,
  snowThemeSelected: themesReducer
});

export default reducers;
