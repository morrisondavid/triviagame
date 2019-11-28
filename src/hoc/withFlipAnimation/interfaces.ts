export interface IWithFlipProps {
  BackComponent?: any;
  flipDuration?: number;
  rotation?: number;
}

export interface IWithFlipState {
  rotate: boolean;
}

export interface IFlipComponentProps {
  onFlip?: () => any;
}
