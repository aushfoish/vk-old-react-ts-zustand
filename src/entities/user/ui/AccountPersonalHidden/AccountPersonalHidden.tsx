import styles from './AccountPersonalHidden.module.scss'
import { PersonalInfo } from "@/shared/ui";
import {

  useSelectContacts,
  useSelectPersonal,
} from "../../model/useFetchPage";
import { motion } from "framer-motion";

interface AccountInfoProps {
  id: string
}

export const AccountPersonalHidden = (props:AccountInfoProps) => {
  const {id} = props
  const personalInfo = useSelectPersonal()
  const contactsInfo = useSelectContacts()

  if (personalInfo) {
    return (
      <motion.div
        className={styles.userInfo}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        style={{ overflow: "hidden" }}
        id={id}
      >
        <div className={styles.contactsInfo}>
          <h3 className={styles.infoHeader}>Контактная информация</h3>

          {contactsInfo?.map((item) => (
            <PersonalInfo
              key={item.id}
              children={item.value}
              label={item.key}
              id={item.dataset}
            />
          ))}
        </div>

        <div className={styles.contactsInfo}>
          <h3 className={styles.infoHeader}>Личная информация</h3>

          {personalInfo?.map((item) => (
            <PersonalInfo
              key={item.id}
              children={item.value}
              label={item.key}
              id={item.dataset}
            />
          ))}
        </div>
      </motion.div>
    );
  }
};
