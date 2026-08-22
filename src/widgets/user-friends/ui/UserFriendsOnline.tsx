
import { Micro_header } from "@/entities/posts";
import { FriendsWindowFriends } from "@/entities/user";
import { userInfoFetch } from "@/entities/user/model/useFetchPage";
import styles from './userFriends.module.scss'

export const UserFriendsOnline = () => {
  const friendsCount = userInfoFetch((state) => state.friendsCount);

  return (
    <div className={styles.friendsBlock}>
      <Micro_header children="Друзья" count={`${friendsCount} друзей`} />

      <FriendsWindowFriends />
    </div>
  );
};
