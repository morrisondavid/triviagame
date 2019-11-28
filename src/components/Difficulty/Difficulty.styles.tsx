import styled from "styled-components";

export const DifficultyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 0px 5px 5px white;
  background-color: white;

  .fade {
    visibility: hidden;
  }

  .selected {
    opacity: 1;
  }
`;
