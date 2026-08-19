import styles from './AccountPersonalHidden.module.scss'
import React from "react";
import {
  birthDay,
  birthMonth,
  birthYear,
  selectLanguages,
  selectWorkplace,
  userInfoFetch,
} from "../../model/useFetchPage";
import { InfoItem, PersonalInfo } from "@/shared/ui";

export const AccountPersonal = () => {
  const birthday = userInfoFetch(birthDay);
  const birthmonth = userInfoFetch(birthMonth);
  const birthyear = userInfoFetch(birthYear);
  const workplace = userInfoFetch(selectWorkplace);
  const languages = userInfoFetch(selectLanguages);

  const hasFullBirthday = birthday && birthmonth && birthyear;
  const formatedBirthday = hasFullBirthday
    ? `${birthday} ${birthmonth} ${birthyear}`
    : "очень старый";

  const formatedWorkplace = workplace || "вероятно, ещё и безработный";

  const languagesList =
    languages?.map((lang, index) => (
      <React.Fragment key={lang.id}>
        <InfoItem label={lang.language}></InfoItem>
        {index !== languages.length && ", "}
      </React.Fragment>
    )) || "поди и языков никаких не знает";

  return (
    <div className={styles.contactsInfo}>
      <PersonalInfo label="Дно рождения" children={formatedBirthday} id="birthday"/>

      <PersonalInfo label="Место рабства" children={formatedWorkplace} id="job"/>

      <PersonalInfo
        label="Языки (типо на каких говоришь)"
        children={languagesList}
        id="languages"
      />
    </div>
  );
};
