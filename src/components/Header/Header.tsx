import React from "react";
import { HeaderDiv } from "./Header.styles";
import { Link } from "react-router-dom";
import DisplayText from "../../constants/DisplayText";

interface IHeaderProps {
  isSnowEnabled: boolean;
  toggleTheme: () => any;
}

const Header = ({ isSnowEnabled, toggleTheme }: IHeaderProps) => (
  <HeaderDiv>
    <Link to="/">Home</Link>
    <h3>Trivia Game</h3>
    <span>
      <a href={"javascript:void(0)"} onClick={toggleTheme}>
        Snow Theme: {isSnowEnabled ? DisplayText.ON : DisplayText.OFF}
      </a>
    </span>
  </HeaderDiv>
);

export default Header;
