import { IQuestionOptions, IQuestion } from "../models/interfaces";
import { AxiosPromise } from "axios";

export interface IApi {
  getQuestions: (questionOptions: IQuestionOptions) => AxiosPromise<IQuestion[]>;
}
