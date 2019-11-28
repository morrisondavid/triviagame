import styled from "styled-components";
import { IWithFlipProps } from "./interfaces";

export const Flippable = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  perspective: 1000px;

  ${(props: IWithFlipProps) => `
    @keyframes rotate-keyframes {
    from {
      transform: rotateY(0deg);
    }

    to {
      transform: rotateY(${props.rotation || 360}deg);
    }
  }
    
    .rotate {
        animation: rotate-keyframes ${props.flipDuration || 1}s;
    }
  `}
`;

export const FlipContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transform-style: preserve-3d;

  ${(props: IWithFlipProps) => `transition: transform ${props.flipDuration || 1}s;`}
`;

export const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

export const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: rotateY(180deg);
`;
