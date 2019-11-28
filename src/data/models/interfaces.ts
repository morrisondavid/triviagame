export type IQuestionDifficulty = "easy" | "medium" | "hard";

export type IQuestionType = "boolean";

export interface IQuestionOptions {
  amount: number;
  difficulty: IQuestionDifficulty;
  type: "boolean";
}

export interface IQuestionList {
  currentQuestionIndex: number;
  questions: IQuestion[];
}

export interface IQuestion {
  category: string;
  type: IQuestionType;
  difficulty: IQuestionDifficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
