import { UserIteractions } from "@/widgets/user-iteractions";
import { UserInfo } from "../widgets/user-info/ui/UserInfo";

export const AccountSection = () => {
  return (
    <div className="main-page">
      <UserIteractions />

      <UserInfo />
    </div>
  );
};
