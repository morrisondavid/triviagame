import ActionTypes from "./actionTypes";
import questionOptionsreducer from "./reducers";
import QuestionOptions from "../../../data/models/QuestionOptions";
import { IQuestionOptions } from "../../../data/models/interfaces";
import { RecordOf } from "immutable";

/*
 * Reducer tests for other modules have been ommited
 * for the sake of time
 */
describe("QuestionOptions reducer", () => {
  test(`handles ${ActionTypes.SELECT_DIFFICULTY} correctly`, () => {
    const state = new QuestionOptions();
    const action = { type: ActionTypes.SELECT_DIFFICULTY, data: "easy" };

    const newState: RecordOf<IQuestionOptions> = questionOptionsreducer(state, action);

    expect(newState.difficulty).toEqual("easy");
  });
});
