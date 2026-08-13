import { UserFriends } from "@/widgets/user-friends/ui/UserFriends";
import { UserPicture } from "@/entities/user";
import { UserActions } from "@/widgets/user-actions";

export const UserIteractions = () => {
  return (
    <div className="user-iteractions">
      <UserPicture />

      <UserActions />

      <UserFriends />
    </div>
  );
};
