import { IQuestionDifficulty } from "data/models/interfaces";
import { IReduxAction } from "state/utils/interfaces";
import { IReduxThunkAction } from "state/interfaces";
import { RouteComponentProps } from "react-router";

export interface IAppConnectedProps {
  isGameComplete: boolean;
  isSnowEnabled: boolean;
}

export interface IAppDispatchFunctions {
  selectDifficulty: (selection: IQuestionDifficulty) => IReduxAction<any>;
  fetchQuestions: () => IReduxThunkAction;
  toggleSnow: () => IReduxAction<any>;
}

export interface IAppError extends Error {
  location: string;
}

export interface IAppState {
  error?: IAppError;
  stylesheetUrl?: string;
}

export type IAppProps = IAppConnectedProps & IAppDispatchFunctions & RouteComponentProps;
