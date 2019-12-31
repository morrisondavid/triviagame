import { Record } from "immutable";
import { IQuestion, IQuestionType, IQuestionDifficulty } from "./interfaces";
import mapProperties from "../../utils/mapProperties";

const QuestionProperties = () => ({
  category: "",
  type: "boolean" as IQuestionType,
  difficulty: "medium" as IQuestionDifficulty,
  question: "",
  correct_answer: "",
  incorrect_answers: [] as string[]
});

const QuestionRecord = Record(QuestionProperties());

/*
 * Mapping Json data from a service to a class allows for strong typing
 * As well as providing an opportunity to perform data validation
 */
class Question extends QuestionRecord implements IQuestion {
  static FromJson = (data: any) => {
    const _this: IQuestion = QuestionProperties();
    mapProperties.call(_this, data);

    return new Question(
      _this.category,
      _this.type,
      _this.difficulty,
      _this.question,
      _this.correct_answer,
      _this.incorrect_answers
    );
  };

  constructor(
    category: string,
    type: IQuestionType,
    difficulty: IQuestionDifficulty,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
  ) {
    const _this = {
      category,
      type,
      difficulty,
      question,
      correct_answer,
      incorrect_answers
    };

    super(_this);
  }
}

export default Question;
