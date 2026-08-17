import { userInfoFetch } from "@/entities/user/model/useFetchPage";
import { useEffect } from "react";

export const useUserFriends = () => {
  const fetchFriends = userInfoFetch((state) => state.fetchFriends);

  useEffect(() => {
    fetchFriends();
  }, [fetchFriends]);
};
