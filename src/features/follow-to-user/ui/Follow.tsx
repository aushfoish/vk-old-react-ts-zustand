import { Button } from "@/shared/ui";
import styles from "./Follow-Button.module.scss";
import { useSubscribe } from "../lib/subscribe";
import { AdminAuth } from "@/widgets/admin-authorization/ui/AdminAuth";

export const Follow = () => {
  const { subscribe, children, auth } = useSubscribe();
  return (
    <div className={`${styles.followButton}`}>
      <Button
      
        className={`${styles.follow}`}
        children={children}
        onClick={subscribe}
      />

      {auth && (<AdminAuth/>)}
    </div>
  );
};
