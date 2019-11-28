import styled from "styled-components";

export const GameDiv = styled.div`
  height: 90%;
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (orientation: portrait) {
    width: 70%;
  }
`;
