import type { Ref } from "react";

interface CanvasItselfProps {
  className?: string;
  width: number;
  height: number;
  ref?: Ref<HTMLCanvasElement>;
}

export const CanvasItself = (props: CanvasItselfProps) => {
  const { width, height, ref, className } = props;
  return (
    <canvas
      className={`canvas ${className}`}
      width={width}
      height={height}
      ref={ref}
    ></canvas>
  );
};
