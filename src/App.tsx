import React from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter, Redirect } from "react-router";
import { Layout, Container } from "./App.styles";
import { IAppProps, IAppState } from "./App.interfaces";
import { Welcome } from "./components/Welcome/Welcome";
import { IQuestionDifficulty } from "./data/models/interfaces";
import connect from "./App.connect";
import DisplayText from "./constants/DisplayText";
import Game from "./components/Game/Game";
import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Difficulty from "./components/Difficulty/Difficulty";
import Results from "./components/Results/Results";
import Routes from "./constants/Routes";
import Snow from "./components/Snow/Snow";
import Blank from "./components/Background/Background.styles";

import "./App.scss";

export class App extends React.PureComponent<IAppProps, IAppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      error: undefined,
      stylesheetUrl: ""
    };
  }

  componentDidCatch(error: any, info: any) {
    error.location = info[Object.keys(info)[0]];
    this.setState({ error });
  }

  selectDifficulty = (e: any) => {
    const { selectDifficulty, fetchQuestions } = this.props;
    const value = e.target as HTMLButtonElement;
    const difficulty = value.innerText as IQuestionDifficulty;

    selectDifficulty(difficulty);
    fetchQuestions();
  };

  renderApplicationError() {
    const { error } = this.state;

    if (!error) {
      return null;
    }

    const hasLocation = !!error.location && process.env.NODE_ENV === "development";
    const actualLocation = hasLocation ? error.location.trim().split(" in ")[0] : "";

    return (
      <ErrorPage title={DisplayText.SOMETHING_WENT_WRONG}>
        <pre>
          <p>{`${DisplayText.ERROR}: ${error.message}`}</p>
          {hasLocation && <p>{`${DisplayText.WHERE}: ${actualLocation}`}</p>}
          <p>{error.stack}</p>
        </pre>
      </ErrorPage>
    );
  }

  render() {
    const { error } = this.state;
    const { isGameComplete, location, history, isSnowEnabled, toggleSnow } = this.props;

    const Root = isSnowEnabled ? Snow : Layout;

    if (isGameComplete && location.pathname !== Routes.RESULTS) {
      return <Redirect to={Routes.RESULTS} />;
    }

    if (error) {
      return this.renderApplicationError();
    }

    return (
      <Root id={"trivia-game"}>
        <Header isSnowEnabled={isSnowEnabled} toggleTheme={toggleSnow} />
        <Container {...this.props}>
          <Game>
            <Switch>
              <Route
                exact
                path={Routes.HOME}
                render={() => <Welcome nextPageUrl={Routes.DIFFICULTY} />}
              />
              <Route path={Routes.QUIZ} component={Question} />
              <Route path={Routes.RESULTS} render={() => <Results {...this.props} />} />
              <Route
                path={Routes.DIFFICULTY}
                render={() => (
                  <Difficulty
                    history={history}
                    flipDuration={3}
                    rotation={3600}
                    BackComponent={Blank}
                    onClick={this.selectDifficulty}
                  />
                )}
              />
            </Switch>
          </Game>
        </Container>
      </Root>
    );
  }
}

export default connect(withRouter(App));
