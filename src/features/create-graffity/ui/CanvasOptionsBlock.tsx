import { Modal_button } from "../../../shared/ui"

interface CanvasOptionsBlockProps {
    onClick: () => void
}

export const CanvasOptionsBlock = (props:CanvasOptionsBlockProps) => {
    const {onClick} = props
    return (
        <div className="canvas-options">
                  <Modal_button className="option"
                  label="Очистить холст"
                  onClick={onClick} />
        </div>
    )
}