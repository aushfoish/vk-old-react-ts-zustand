import { UserFriendsOnline } from "@/widgets/user-friends/ui/UserFriendsOnline";
import { useUserFriends } from "../model/useUserFriends";


export const UserFriends = () => {
  useUserFriends()
  return <UserFriendsOnline />;
};
