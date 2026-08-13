import React from "react";
import {
  birthDay,
  birthMonth,
  birthYear,
  selectLanguages,
  selectWorkplace,
  userInfoFetch,
} from "../../../../UserProfileFetch";
import { InfoItem } from "@/shared/ui";
import { AccountPersonalItem } from "@/shared/ui/PersonalInfoMain";

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
        <InfoItem children={lang.language}></InfoItem>
        {index !== languages.length && ", "}
      </React.Fragment>
    )) || "поди и языков никаких не знает";

  return (
    <div className="info-place">
      <AccountPersonalItem label="Дно рождения" children={formatedBirthday} />

      <AccountPersonalItem label="Место рабства" children={formatedWorkplace} />

      <AccountPersonalItem
        label="Языки (типо на каких говоришь)"
        children={languagesList}
      />
    </div>
  );
};
