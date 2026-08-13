import { AccountSection } from "./AccountSection";
import { userInfoFetch } from "../UserProfileFetch";
import { useEffect, useState } from "react";
import { MainPageAuthorization } from "./MainPageAuthorization";
import { AnimatePresence } from "framer-motion";
import { AccountTitle } from "@/entities/user";

export const UserPage = () => {
  const profile = userInfoFetch((state) => state.profile);
  const isLoading = userInfoFetch((state) => state.isLoading);
  const fetchName = userInfoFetch((state) => state.fetchName);
  const [modalClosed, setModalClosed] = useState(false);

  useEffect(() => {
    fetchName();
  }, [fetchName]);

  if (isLoading === true) {
    console.log("контент загружается");
  } else if (profile === null) {
    return <div className="account-title">данные не найдены</div>;
  } else if (isLoading === false) {
    console.log("контент загружен");
  }

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

