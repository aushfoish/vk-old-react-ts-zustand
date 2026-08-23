import styles from './GraffityUI.module.scss'
import { Modal_button } from "@/shared/ui";

interface CanvasOptionsBlockProps {
  onClick: () => void;
}

export const CanvasOptionsBlock = (props: CanvasOptionsBlockProps) => {
  const { onClick } = props;
  return (
    <div className={styles.canvasOptions}>
      <Modal_button
        className="option"
        btnLabel="Очистить холст"
        onClick={onClick}
      />
    </div>
  );
};
