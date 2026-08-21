import type React from "react";
import { motion } from "framer-motion";
import { Modal_button } from "@/shared/ui/ModalButton";
import styles from './modalWindow.module.scss'

interface ModalWindowProps {
  children: React.ReactNode;
  label: string;
  id: string;
  onCloseModal?: () => void;
  classname?: string;
}

export const ModalWindow = (props: ModalWindowProps) => {
  const { children, label, id, onCloseModal, classname } = props;

  return (
      <motion.div
        className={`${styles.modalWindow} ${classname}`.trim()}
        id={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.modalWrapper}>
          <motion.div
            className={styles.modalContent}
            initial={{ scale: 0.93, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.93, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.windowUpperBorder}>
              <p className={styles.windowLabel}>{label}</p>
              {onCloseModal && (
                <Modal_button
                  className=""
                  onClick={() => onCloseModal()}
                  btnLabel="Закрыть"
                >
                </Modal_button>
              )}
            </div>
            {children}
          </motion.div>
        </div>
      </motion.div>
  );
};
