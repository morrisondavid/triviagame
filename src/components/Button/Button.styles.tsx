import styled from "styled-components";

export const StyledButton = styled.button`
  width: 130px;
  height: 40px;
  opacity: 0.3;
  border: none;
  outline: none;
  background-color: #077cf1;
  color: white;
  font-size: 1rem;

  :hover {
    opacity: 1;
  }
`;

export const ButtonContainer = styled.div`
  min-width: 280px;
  display: flex;
  justify-content: space-between;
`;
