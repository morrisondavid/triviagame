import { combineReducers } from "redux";
import questionsReducer from "./modules/questions/reducers";
import questionOptionsReducer from "./modules/questionOptions/reducers";
import answersReducer from "./modules/answers/reducers";
import themesReducer from "./modules/themes/reducers";

const reducers = combineReducers({
  questions: questionsReducer,
  questionOptions: questionOptionsReducer,
  answers: answersReducer,
  snowThemeSelected: themesReducer
});

export default reducers;
