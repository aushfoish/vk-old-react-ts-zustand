import { userInfoFetch } from "@/UserProfileFetch";
import { useEffect } from "react";

export const useUserFriends = () => {
  const fetchFriends = userInfoFetch((state) => state.fetchFriends);

  useEffect(() => {
    fetchFriends();
  }, [fetchFriends]);
};
