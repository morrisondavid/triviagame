import styled from "styled-components";
import { IAppProps } from "./App.interfaces";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Container = styled.div`
  flex: 1;
  width: 100vw;
  display: flex;
  align-items: center;

  ${(props: IAppProps) => `background-color: ${props.isSnowEnabled ? "#077cf1" : "#f2f2f2"};`}
`;
