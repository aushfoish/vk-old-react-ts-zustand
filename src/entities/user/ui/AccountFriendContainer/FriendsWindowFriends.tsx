import { userInfoFetch } from "@/UserProfileFetch";
import { FriendItem } from "../AccountFriendItem/FriendItem";

export const FriendsWindowFriends = () => {
  const friendsArray = userInfoFetch((state) => state.friendsArray);
  return (
    <div className="friendlist">
      {friendsArray?.map((friend) => (
        <FriendItem key={friend.id} name={friend.name} src={friend.userpic} />
      ))}
    </div>
  );
};
