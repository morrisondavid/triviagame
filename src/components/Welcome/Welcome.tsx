import React from "react";
import { Link } from "react-router-dom";
import { IWelcomeProps } from "./interfaces";
import { WelcomeContainer } from "./Welcome.styles";
import Button from "../Button/Button";
import DisplayText from "../../constants/DisplayText";

export const Welcome = ({ nextPageUrl }: IWelcomeProps) => {
  return (
    <WelcomeContainer>
      <h1>{DisplayText.WELCOME}</h1>
      <div>
        <h3>{DisplayText.WELCOME_EXPLANATION}</h3>
        <p>{DisplayText.WELCOME_QUESTION}</p>
      </div>
      <Link to={nextPageUrl}>
        <Button>{DisplayText.BEGIN}</Button>
      </Link>
    </WelcomeContainer>
  );
};
