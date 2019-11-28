import React from "react";
import Spinner from "react-spinkit";
import "./Loader.scss";

// http://kyleamathews.github.io/react-spinkit/
const Loader = ({ text, type, ...rest }: ILoaderProps) => (
  <div className="loader-wrapper" {...rest}>
    <div className="loader-wrapper__loader">
      <Spinner fadeIn="none" name={type || "folding-cube"} />
      {text || "Loading..."}
    </div>
  </div>
);

export type LoaderTypes =
  | "three-bounce"
  | "double-bounce"
  | "rotating-plane"
  | "folding-cube"
  | "wave"
  | "wandering-cubes"
  | "pulse"
  | "chasing-dots"
  | "circle"
  | "cube-grid"
  | "wordpress"
  | "ball-grid-beat"
  | "ball-grid-pulse"
  | "line-spin-fade-loader"
  | "ball-spin-fade-loader"
  | "ball-pulse-rise"
  | "line-scale"
  | "line-scale-pulse-out"
  | "line-scale-pulse-out-rapid"
  | "line-scale-party"
  | "ball-triangle-path"
  | "ball-scale-ripple-multiple"
  | "ball-pulse-sync"
  | "ball-beat"
  | "ball-scale-multiple"
  | "ball-zig-zag"
  | "ball-zig-zag-deflect"
  | "ball-clip-rotate"
  | "ball-clip-rotate-pulse"
  | "ball-clip-rotate-multiple"
  | "ball-scale-ripple"
  | "triangle-skew-spin"
  | "pacman";

interface ILoaderProps {
  text?: string;
  type?: LoaderTypes;
}

export default Loader;
