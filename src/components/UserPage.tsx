import { AccountSection } from "./AccountSection";
import { useState } from "react";
import { MainPageAuthorization } from "./MainPageAuthorization";
import { AnimatePresence } from "framer-motion";
import { AccountTitle } from "@/entities/user";
import { useFetchProfile } from "@/entities/user/model/useFetchProfile";

export const UserPage = () => {
  const {isLoading, profile} = useFetchProfile()
  const [modalClosed, setModalClosed] = useState(false);

  if (isLoading) return <div>загрузка</div>
  if (!profile) return <div>данные не найдены</div>
  return (
    <>
      <AnimatePresence>
        {modalClosed === false && (
          <MainPageAuthorization onCloseModal={() => setModalClosed(true)} />
        )}
      </AnimatePresence>

      <AccountTitle />

      <AccountSection />
    </>
  );
};

