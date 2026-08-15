import type React from "react";
import { motion } from "framer-motion";

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
        className={`modal-window ${classname}`}
        id={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="modal-wrapper">
          <motion.div
            className="modal-content"
            initial={{ scale: 0.93, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.93, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="window-upper-border">
              <p className="window-label">{label}</p>
              {onCloseModal && (
                <button
                  className="modal-close-button"
                  onClick={() => onCloseModal()}
                >
                  Закрыть
                </button>
              )}
            </div>
            {children}
          </motion.div>
        </div>
      </motion.div>
  );
};
