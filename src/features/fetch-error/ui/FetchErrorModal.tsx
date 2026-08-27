import { Button, ModalFooter, ModalWindow } from "@/shared/ui";
import styles from "./FetchError.module.scss";

interface FetchError {
  onClick: () => void;
  label: string;
  text: string;
}

export const FetchErrorModal = (props: FetchError) => {
  const { onClick, label, text } = props;
  return (
    <ModalWindow
      classContent={styles.connectionError}
      id="modalError"
      children={
        <div className={styles.message}>
          <h2>{label}</h2>
          <p>
            {text}
          </p>
          {onClick && (
            <ModalFooter
              footer={
                <Button
                  children="Обновить"
                  onClick={onClick}
                  className={styles.refresh}
                />
              }
            />
          )}
        </div>
      }
      label="Ошибка"
    />
  );
};
