import React from "react";
import classnames from "classnames";
import { Flippable, FlipContainer, Front, Back } from "./withFlipAnimation.styles";
import { IWithFlipState, IWithFlipProps } from "./interfaces";

const withFlipAnimation = <P extends object>(Component: React.ComponentType<P>) => {
  return class WithFlip extends React.Component<P & IWithFlipProps, IWithFlipState> {
    isRotating = false;

    constructor(props: any) {
      super(props);

      this.state = {
        rotate: false
      };
    }

    doFlip = () => {
      const duration = this.props.flipDuration || 1;
      const _me = this;

      if (!_me.isRotating) {
        _me.isRotating = true;

        this.setState(
          () => ({ rotate: true }),
          () =>
            setTimeout(() => {
              _me.isRotating = false;
              _me.setState({ rotate: false });
            }, duration * 1000)
        );
      }
    };

    render() {
      const { BackComponent, flipDuration, rotation } = this.props;
      const classes = classnames({ rotate: this.state.rotate });

      const flipProps = { onFlip: this.doFlip };

      return (
        <Flippable flipDuration={flipDuration} rotation={rotation}>
          <FlipContainer flipDuration={flipDuration} className={classes}>
            <Front>
              <Component {...this.props} {...flipProps} />
            </Front>
            <Back>
              {BackComponent && <BackComponent {...this.props} />}
              {!BackComponent && <Component {...this.props} {...flipProps} />}
            </Back>
          </FlipContainer>
        </Flippable>
      );
    }
  };
};

export default withFlipAnimation;
