import { IReduxAction, IActionHandlerFactory } from "./interfaces";
import isFunction from "utils/isFunction";
import constants from "constants/index";

export default function createReducer(initialstate: any, actionhandlers: IActionHandlerFactory) {
  let hasFunctions = false;
  for (let key in actionhandlers) {
    if (actionhandlers.hasOwnProperty(key)) {
      if (isFunction(actionhandlers[key])) {
        actionhandlers[1] = "hello";
        hasFunctions = true;
        break;
      }
    }
  }

  if (Object.keys(actionhandlers).length === 0 || !hasFunctions) {
    throw new Error(constants.ErrorMessages.REDUCER_ACTION_HANDLERS_MISSING);
  }

  return function(state = initialstate, action: IReduxAction<any>) {
    const type = action.type;
    const handler = actionhandlers[type];

    return handler ? handler(state, action) : state;
  };
}
