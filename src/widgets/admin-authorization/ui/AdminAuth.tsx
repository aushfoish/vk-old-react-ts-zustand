import { ModalWindow } from "@/shared/ui/ModalWindow/ModalWindow";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AdminAuthModule } from "@/features/pass-the-authorization/ui/AdminAuthModule";


export const AdminAuth = () => {
  const [modalClosed, setModalClosed] = useState(false);
  const [isAdmin] = useState(false)

  if (!isAdmin) return (
    <AnimatePresence>
      {modalClosed === false && (
        <ModalWindow
          children={<AdminAuthModule onClose={() => 
            setModalClosed(true)
            
        } />}
          label="Войти как админ"
          id="adminAuth"
        />
      )}
    </AnimatePresence>
  );

  
};