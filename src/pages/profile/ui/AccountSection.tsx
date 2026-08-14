import { UserInfo } from "@/widgets/user-info";
import { UserIteractions } from "@/widgets/user-iteractions";

export const AccountSection = () => {
  return (
    <div className="main-page">
      <UserIteractions />

      <UserInfo />
    </div>
  );
};
