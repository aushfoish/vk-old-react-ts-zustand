
import { useState } from "react";
import {
  selectContacts,
  selectPersonal,
  userInfoFetch,
} from "../../../entities/user/model/useFetchPage";
import { AnimatePresence } from "framer-motion";
import { AccountBio, AccountGallery, AccountPersonal, AccountPersonalHidden } from "@/entities/user";
import { AccountWall } from "@/widgets/account-wall";
import { AccountPersonalSpoilerButton } from "@/shared/ui/AccountSpoilerBtn";

export const UserInfo = () => {
  const personalInfo = userInfoFetch(selectPersonal);
  const contactsInfo = userInfoFetch(selectContacts);
  const isHiddenInfoExists =
    (personalInfo && personalInfo.length > 0) ||
    (contactsInfo && contactsInfo.length > 0);
  const [infoHidden, setInfoHidden] = useState(true);

  return (
    <div className="user-info">
      <AccountBio />

      <AccountPersonal />

      {isHiddenInfoExists && (
        <AccountPersonalSpoilerButton
          children={
            infoHidden
              ? "Показать подробную информацию"
              : "Скрыть подробную информацию"
          }
          onClick={() => {
            if (infoHidden) {
              setInfoHidden(false);
            } else if (!infoHidden) {
              setInfoHidden(true);
            }
          }}
        />
      )}

      <AnimatePresence>
        {infoHidden === false && <AccountPersonalHidden />}
      </AnimatePresence>

      <AccountGallery />

      <AccountWall />
    </div>
  );
};
