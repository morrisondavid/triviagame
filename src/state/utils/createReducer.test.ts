import createReducer from "./createReducer";
import isFunction from "utils/isFunction";
import ErrorMessages from "constants/ErrorMessages";
import { IReduxAction } from "./interfaces";

describe("createReducer", () => {
  test("returns a reducer function", () => {
    const createdReducer = createReducer({}, { test: () => {} });

    expect(isFunction(createdReducer)).toEqual(true);
  });

  test("throws error if action handler factory contains no functions", () => {
    const build = () => createReducer({}, { test: "" });

    expect(build).toThrowError(ErrorMessages.REDUCER_ACTION_HANDLERS_MISSING);
  });

  describe("returned reducer", () => {
    test("maintains intial state", () => {
      const initialState = { hello: "world" };
      const initialState2 = { monkeys: "jump" };
      const handlers = { ["test"]: (state: any) => Object.assign({}, state) };

      const testReducer = createReducer(initialState, handlers);
      //Ensure 2nd method call does not overwrite initial state
      createReducer(initialState2, handlers);
      const returnedState = testReducer(undefined, { type: "test" });

      expect(returnedState).not.toBe(initialState);
      expect(returnedState).toEqual(initialState);
    });

    test("actions are handled by correct handler", () => {
      let receivedAction = undefined;
      const action = { type: "test", data: 1 };
      const handlers = {
        [action.type]: (state: any, action: IReduxAction<any>) => {
          receivedAction = action;
          return state;
        }
      };

      const testReducer = createReducer({}, handlers);

      testReducer({ hello: "world" }, action);

      expect(receivedAction).toEqual(action);
    });

    test("returns original state if unchanged", () => {
      const originalState = {};
      const handlers = { test: () => {} };
      const testReducer = createReducer(originalState, handlers);
      const returnedState = testReducer(originalState, { type: "" });

      expect(returnedState).toBe(originalState);
    });
  });
});
