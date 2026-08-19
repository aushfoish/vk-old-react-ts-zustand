import styles from './FriendList.module.scss'
import { userInfoFetch } from "@/entities/user/model/useFetchPage";
import { FriendItem } from "../AccountFriendItem/FriendItem";

export const FriendsWindowFriends = () => {
  const friendsArray = userInfoFetch((state) => state.friendsArray);
  return (
    <ul className={styles.friendlist}>
      {friendsArray?.map((friend) => (
        <FriendItem key={friend.id} name={friend.name} src={friend.userpic} />
      ))}
    </ul>
  );
};
