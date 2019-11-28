/* eslint-disable */
import axios from "axios";
import QuestionOptions from "data/models/QuestionOptions";
import Result from "utils/Result";
import ErrorMessages from "constants/ErrorMessages";
import QuestionList from "data/models/QuestionList";
import { buildQueryString } from "utils/buildQueryString";
import { easy, medium, hard } from "data/api/mockdata";

const mockQuestions: any = {
  easy,
  medium,
  hard
};

const client = axios.create({
  baseURL: process.env.API_URL
});

class Api {
  async getQuestions(questionOptions: QuestionOptions) {
    const queryString = buildQueryString(questionOptions);

    try {
      const response = await client.get(queryString);

      const { results } = response.data;

      if (!results || !results.length) {
        throw Error();
      }

      var parsedResponse = new QuestionList(results, 0);

      return Result.Success(parsedResponse);
    } catch (error) {
      //Fallback questions if api is not working
      const questions = mockQuestions[questionOptions.difficulty.toLowerCase()];
      return Result.Success(new QuestionList(questions, 0));

      // return error
      //   ? Result.Error(error.message)
      //   : Result.Error(ErrorMessages.FETCH_QUESTIONS_ERROR);
    }
  }
}

export default new Api();
