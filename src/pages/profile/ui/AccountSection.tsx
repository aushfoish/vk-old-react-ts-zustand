import { UserInfo } from "@/widgets/user-info";
import { UserIteractions } from "@/widgets/user-iteractions";
import styles from './userPage.module.scss'

export const AccountSection = () => {
  return (
    <div className={styles.mainPage}>
      <UserIteractions />

      <UserInfo />
    </div>
  );
};
