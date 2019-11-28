import { IQuestion } from "data/models/interfaces";
import { IReduxAction } from "state/utils/interfaces";
import { Map } from "immutable";
import { RouteComponentProps } from "react-router";

export interface IResultsConnectedProps {
  questions: IQuestion[];
  answers: Map<number, boolean>;
  correctAnswersCount: number;
}

export interface IResultsDispatchFunctions {
  reset: () => IReduxAction<any>;
}

export type IResultsProps = IResultsConnectedProps &
  IResultsDispatchFunctions &
  RouteComponentProps;
