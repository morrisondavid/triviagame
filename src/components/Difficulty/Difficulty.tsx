import React from "react";
import { DifficultyContainer } from "./Difficulty.styles";
import { Link } from "react-router-dom";
import { IDifficultyProps, IDifficultyState } from "./interfaces";
import Button from "components/Button/Button";
import withFlipAnimation from "hoc/withFlipAnimation/withFlipAnimation";
import classnames from "classnames";

class Difficulty extends React.PureComponent<IDifficultyProps, IDifficultyState> {
  constructor(props: any) {
    super(props);

    this.state = {
      options: ["Easy", "Medium", "Hard"],
      randomSelection: ""
    };
  }

  componentDidUpdate() {
    const { randomSelection } = this.state;
    const { onClick, history } = this.props;

    if (randomSelection) {
      setTimeout(() => {
        onClick({ target: { innerText: randomSelection } });
        history.push("/quiz");
      }, 2000);
    }
  }

  random = () => {
    const { options } = this.state;
    const { flipDuration, onFlip } = this.props;
    const delay = (flipDuration || 1) * 1000;
    const index = Math.floor(Math.random() * options.length - 1 + 1);

    onFlip && onFlip();
    setTimeout(() => {
      this.setState(() => ({ randomSelection: options[index] }));
    }, delay);
  };

  renderLinks = () => {
    const { randomSelection, options } = this.state;

    return options.map((option: string, i: number) => {
      const classes = classnames({
        selected: randomSelection && randomSelection === option,
        fade: randomSelection && randomSelection !== option
      });

      return (
        <Link to="/quiz" key={i}>
          <Button className={classes} {...this.props}>
            {option}
          </Button>
        </Link>
      );
    });
  };
  render() {
    return (
      <DifficultyContainer>
        <h1>Select Difficulty</h1>
        {this.renderLinks()}
        <a href="javascript:void(0);" onClick={this.random}>
          Random?
        </a>
      </DifficultyContainer>
    );
  }
}

export default withFlipAnimation(Difficulty);
