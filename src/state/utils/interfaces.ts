export interface IReduxAction<T> {
  type: string;
  data?: T;
}

export interface IActionHandlerFactory {
  [key: string]: any;
}
