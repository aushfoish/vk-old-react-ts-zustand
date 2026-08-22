import { Button, ModalFooter, ModalWindow } from "@/shared/ui";
import styles from "./FetchError.module.scss";

export const FetchErrorModal = () => {
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
            <ModalFooter footer={<Button children="Обновить" className={styles.refresh}/>} />
          </div>
        }
        label="Ошибка"
      />
      
  );
};
