import { ModalWindow } from "@/shared/ui/ModalWindow/ModalWindow";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AdminAuthModule } from "@/features/pass-the-authorization/ui/AdminAuthModule";
import { useNavigate } from "react-router-dom";


export const AdminAuth = () => {
  const [modalClosed, setModalClosed] = useState(false);
  const [isAdmin] = useState(false);
  const nav = useNavigate()

  if (!isAdmin)
    return (
      <AnimatePresence>
        {modalClosed === false && (
          <ModalWindow
            children={<AdminAuthModule onClose={() => setModalClosed(true)} />}
            label="Войти как админ"
            id="adminAuth"
          />
        )}
      </AnimatePresence>
    );

  if (isAdmin) {
    nav('/admin');
  }
};
