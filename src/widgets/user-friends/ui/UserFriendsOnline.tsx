import { userInfoFetch } from "../../../entities/user/model/useFetchPage";
import { FriendsWindowFriends } from "../../../entities/user/ui/AccountFriendContainer/FriendsWindowFriends";
import { Micro_header } from "@/entities/posts";

export const UserFriendsOnline = () => {
  const friendsCount = userInfoFetch((state) => state.friendsCount);

  return (
    <div className="friends-block">
      <Micro_header children="Друзья" count={`${friendsCount} друзей`} />

      <FriendsWindowFriends />
    </div>
  );
};
