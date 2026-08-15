import { useEffect, useRef } from "react";
interface CanvasDrwaingSettings {
  strokeStyle: string,
  lineWidth: number,
  globalAlpha: number,
}

export const useCanvasDrawing = (settings: CanvasDrwaingSettings) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const start = (e: MouseEvent) => {
      isDrawing.current = true;
      draw(e);
    };

    const stop = () => {
      isDrawing.current = false;
      ctx.beginPath();
    };

    const draw = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      if (isDrawing.current === true) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
      }
    };
    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", draw);
    window.addEventListener("mouseup", stop);

    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mousemove", draw);
      window.removeEventListener("mouseup", stop);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;

    const ctx = canvas.getContext("2d");
    if (ctx === null) return;

    ctx.lineWidth = settings.lineWidth;
    ctx.strokeStyle = settings.strokeStyle;

    ctx.globalAlpha = settings.globalAlpha;
  }, [settings.lineWidth, settings.globalAlpha, settings.strokeStyle]);

  const ctxClear = () => {
    const canvas = canvasRef.current;
    if (canvas === null) return;
    const ctx = canvas.getContext("2d");
    if (ctx === null) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return { canvasRef, ctxClear }
};
