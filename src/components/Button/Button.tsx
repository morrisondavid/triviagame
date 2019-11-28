import React from "react";
import { StyledButton } from "./Button.styles";
import { IButtonProps } from "./interfaces";

const Button = ({ onClick, children, className }: IButtonProps) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
