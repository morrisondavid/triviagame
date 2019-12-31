import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  height: 100%;
  overflow: hidden;
}

#trivia-app {
  font-family: "Arial", sans-serif;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#6af), to(#bdf));
  background-image: -webkit-linear-gradient(#6af, #bdf);
  background-image: -moz-linear-gradient(#6af, #bdf);
  background-image: linear-gradient(#6af, #bdf);
}
`;

export const SnowTheme = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  -webkit-backface-visibility: hidden;

  .snowflake {
    position: absolute;
    display: block;
    position: absolute;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    -webkit-backface-visibility: hidden;
    background-image: -webkit-radial-gradient(
      center,
      circle farthest-corner,
      rgba(255, 255, 255, 1) 40%,
      rgba(255, 255, 255, 0) 100%
    );
    background-image: -moz-radial-gradient(
      center,
      circle farthest-corner,
      rgba(255, 255, 255, 1) 40%,
      rgba(255, 255, 255, 0) 100%
    );
    background-image: -ms-radial-gradient(
      center,
      circle farthest-corner,
      rgba(255, 255, 255, 1) 40%,
      rgba(255, 255, 255, 0) 100%
    );
    background-image: radial-gradient(
      center,
      circle farthest-corner,
      rgba(255, 255, 255, 1) 40%,
      rgba(255, 255, 255, 0) 100%
    );

    #trivia-app {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
`;
