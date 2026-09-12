import { ModalWindow } from "@/shared/ui/ModalWindow/ModalWindow";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AdminAuthModule } from "@/features/pass-the-authorization/ui/AdminAuthModule";
import { Navigate } from "react-router-dom";


export const AdminAuth = () => {
  const [modalClosed, setModalClosed] = useState(false);
  const [isAdmin] = useState(true);

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
    return <Navigate to="/admin" replace />;
  }
  
};
