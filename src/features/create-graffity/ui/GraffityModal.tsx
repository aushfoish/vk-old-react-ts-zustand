import { useState } from "react";
import { Button } from "../../../shared/ui/Button/Button";
import { ModalFooter } from "../../../components/ModalWindow/ModalFooter";
import { userPostsFetch } from "../../../UserPostsFetch";
import { CanvasOptionsBlock } from "./CanvasOptionsBlock";
import { CanvasItselfContainer } from "./CanvasItselfContainer";
import { CanvasBrushSettings } from "./CanvasBrushSettings";
import { useCanvasDrawing } from "../../../shared/lib/hooks/useCanvasDrawing";

interface GraffityModalProps {
  onCloseModal: (value: boolean) => void;
}

export const GraffityModal = (props: GraffityModalProps) => {
  const { onCloseModal } = props;

  const { resetSendStatus } = userPostsFetch();

  const uploadAndProceedPicture = userPostsFetch(
    (state) => state.uploadAndProceedPicture,
  );

  const [strokeStyle, setStrokeStyle] = useState("#3498db");
  const [lineWidth, setLinewidth] = useState(50);
  const [globalAlpha, setGlobalAlpha] = useState(0.7);

  const { canvasRef, ctxClear } = useCanvasDrawing({
    strokeStyle,
    lineWidth,
    globalAlpha,
  });

  const ctxSave = () => {
    const canvas = canvasRef.current;
    if (canvas === null) return;
    const ctx = canvas.getContext("2d");
    if (ctx === null) return;

    const scenario = "graffity";
    const imageExt = "png";
    const bucket =
      "https://tyekwqioulapfagzpswr.supabase.co/storage/v1/object/pictures";
    canvas.toBlob(
      async (readyBlob) => {
        const success = await uploadAndProceedPicture(
          readyBlob,
          bucket,
          imageExt,
          scenario,
        );
        if (success) {
          ctxClear();
          onCloseModal(false);
          resetSendStatus();
        } else {
          alert("ошибка при отправке граффити");
        }
      },
      "image/png",
      1.0,
    );
  };

  return (
    <>
      <div className="canvas-ui">
        <CanvasOptionsBlock onClick={ctxClear} />

        <CanvasItselfContainer canvasRef={canvasRef} width={600} height={300} />

        <CanvasBrushSettings
          strokeStyle={strokeStyle}
          setStrokeStyle={setStrokeStyle}
          lineWidth={lineWidth}
          setLinewidth={setLinewidth}
          globalAlpha={globalAlpha}
          setGlobalAlpha={setGlobalAlpha}
        />

        <ModalFooter
          footer={
            <Button
              className="post"
              children="Отправить"
              onClick={() => {
                ctxSave();
              }}
            />
          }
        />
      </div>
    </>
  );
};
