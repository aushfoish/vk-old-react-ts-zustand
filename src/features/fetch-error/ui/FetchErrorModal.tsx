import { Button, ModalFooter, ModalWindow } from "@/shared/ui";
import styles from "./FetchError.module.scss";

interface FetchError {
onClick: () => void
}

export const FetchErrorModal = (props: FetchError) => {
  const {onClick} = props
  return (
      <ModalWindow
        classContent={styles.connectionError}
        id="modalError"
        children={
          <div className={styles.message}>
            <h2>Не удалось подключиться к серверу</h2>
            <p>
              Проверьте подключение к интернету и обновите страницу, либо
              повторите попытку позже.
            </p>
            {onClick && (<ModalFooter footer={<Button children="Обновить" onClick={onClick} className={styles.refresh}/>} />)}
          </div>
        }
        label="Ошибка"
      />
      
  );
};
