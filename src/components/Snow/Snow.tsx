import React from "react";

import Snowflake from "../../data/models/Snowflake";
import { GlobalStyle, SnowTheme } from "./Snow.styles";

class Snow extends React.PureComponent<any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    Snowflake.init(document.getElementById(this.props.id));
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <SnowTheme id={this.props.id}>{this.props.children}</SnowTheme>
      </React.Fragment>
    );
  }
}

export default Snow;
