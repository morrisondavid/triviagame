import { IWithFlipProps, IFlipComponentProps } from "hoc/withFlipAnimation/interfaces";
import { History } from "history";

interface IProps {
  history: History;
  onClick?: (e: any) => any;
}

export interface IDifficultyState {
  options: string[];
  randomSelection: string;
}

export type IDifficultyProps = IProps & IFlipComponentProps & IWithFlipProps;
