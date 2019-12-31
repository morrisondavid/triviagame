import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getQuestions } from "../../state/modules/questions/selectors";
import QuestionActions from "../../state/modules/questions/actionCreators";
import { IResultsConnectedProps, IResultsDispatchFunctions } from "./interfaces";
import { getAnswers, getCorrectAnswersCount } from "../../state/modules/answers/selectors";

const mapStateToProps = (state: any): IResultsConnectedProps => ({
  questions: getQuestions(state),
  answers: getAnswers(state),
  correctAnswersCount: getCorrectAnswersCount(state)
});

const mapDispatchToProps = (dispatch: any): IResultsDispatchFunctions => ({
  reset: bindActionCreators(QuestionActions.reset, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
