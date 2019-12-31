import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { IQuestionDispatchFunctions, IQuestionConnectedProps } from "./interfaces";
import {
  getCurrentQuestion,
  getCurrentQuestionIndex,
  getQuestionCount
} from "../../state/modules/questions/selectors";
import QuestionActions from "../../state/modules/questions/actionCreators";
import AnswerActions from "../../state/modules/answers/actionCreators";

const mapStateToProps = (state: any): IQuestionConnectedProps => ({
  question: getCurrentQuestion(state),
  questionIndex: getCurrentQuestionIndex(state),
  questionCount: getQuestionCount(state)
});

const mapDispatchToProps = (dispatch: any): IQuestionDispatchFunctions => ({
  saveAnswer: bindActionCreators(AnswerActions.saveAnswer, dispatch),
  nextQuestion: bindActionCreators(QuestionActions.nextQuestion, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
