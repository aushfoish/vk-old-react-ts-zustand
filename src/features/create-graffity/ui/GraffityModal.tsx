import { useWallStore } from "@/entities/posts/model/useWallStore";
import { CanvasBrushSettings } from "@/features/create-graffity/ui/CanvasBrushSettings";
import { CanvasItselfContainer } from "@/features/create-graffity/ui/CanvasItselfContainer";
import { CanvasOptionsBlock } from "@/features/create-graffity/ui/CanvasOptionsBlock";
import { uploadPicture } from "@/shared/api/uploadPicture";
import { useCanvasDrawing } from "@/shared/lib/hooks/useCanvasDrawing";
import { Button, ModalFooter } from "@/shared/ui";
import { useState } from "react";


interface GraffityModalProps {
  onCloseModal: (value: boolean) => void;
}

export const GraffityModal = (props: GraffityModalProps) => {
  const { onCloseModal } = props;

  const resetSendStatus = useWallStore((state) => state.resetSendStatus)

  const [sending, setSending] = useState(false)
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
        setSending(true)
        const success = await uploadPicture(
          readyBlob,
          bucket,
          imageExt,
          scenario,
        );
        if (success) {
          ctxClear();
          onCloseModal(false);
          resetSendStatus();
          setSending(false)
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
              isLoading={sending}
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
