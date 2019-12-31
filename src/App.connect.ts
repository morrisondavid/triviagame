import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { IAppConnectedProps, IAppDispatchFunctions } from "./App.interfaces";
import { isGameComplete } from "./state/modules/questions/selectors";
import QuestionActions from "./state/modules/questions/actionCreators";
import QuestionOptionsActions from "./state/modules/questionOptions/actionCreators";
import ThemeActions from "./state/modules/themes/actionCreators";
import { isSnowEnabled } from "./state/modules/themes/selectors";

const mapStateToProps = (state: any): IAppConnectedProps => ({
  isGameComplete: isGameComplete(state),
  isSnowEnabled: isSnowEnabled(state)
});

const mapDispatchToProps = (dispatch: any): IAppDispatchFunctions => ({
  selectDifficulty: bindActionCreators(QuestionOptionsActions.selectDifficulty, dispatch),
  fetchQuestions: bindActionCreators(QuestionActions.fetchQuestions, dispatch),
  toggleSnow: bindActionCreators(ThemeActions.toggleSnow, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
