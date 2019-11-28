import React from "react";
import { IErrorPageProps } from "./interfaces";

import "./ErrorPage.scss";

class ErrorPage extends React.PureComponent<IErrorPageProps> {
  render() {
    const { children, title } = this.props;

    return (
      <section className="app__error">
        {title && (
          <header>
            <h1>{title}</h1>
          </header>
        )}
        {children}
      </section>
    );
  }
}

export default ErrorPage;
