import Question from "./Question";
import { Record } from "immutable";

import { IQuestionList, IQuestion } from "./interfaces";

const QuestionListProperties = () => ({
  questions: [] as IQuestion[],
  currentQuestionIndex: -1
});

const QuestionListRecord = Record(QuestionListProperties());

export default class QuestionList extends QuestionListRecord implements IQuestionList {
  constructor(questions: IQuestion[] = [], currentQuestionIndex: number = -1) {
    const _this: IQuestionList = QuestionListProperties();

    _this.currentQuestionIndex = currentQuestionIndex;
    _this.questions = questions.map(q => Question.FromJson(q));

    super(_this);
  }
}
