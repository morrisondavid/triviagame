import { Record } from "immutable";
import { IQuestionOptions, IQuestionDifficulty, IQuestionType } from "./interfaces";

const QuestionOptionsRecord = Record({
  amount: 10,
  difficulty: "medium" as IQuestionDifficulty,
  type: "boolean" as IQuestionType
});

class QuestionOptions extends QuestionOptionsRecord implements IQuestionOptions {}

export default QuestionOptions;
