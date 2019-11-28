import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";
import initialState from "./initialState";

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  initialState as any,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
