import { IReduxState } from "./initialState";

export type IReduxThunkAction = (dispatch: any, getState?: () => IReduxState) => void;
