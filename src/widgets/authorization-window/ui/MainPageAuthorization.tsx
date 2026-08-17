import { ModalWindow } from "@/shared/ui/ModalWindow/ModalWindow";
import { AuthorizationModule } from "@/features/pass-the-authorization/ui/AuthorizationModule";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export const MainPageAuthorization = () => {
  const [modalClosed, setModalClosed] = useState(false);

  return (
    <AnimatePresence>
      {modalClosed === false && (
        <ModalWindow
          children={<AuthorizationModule onClose={() => setModalClosed(true)} />}
          label="Авторизация"
          id="auth"
        />
      )}
    </AnimatePresence>
  );
};
