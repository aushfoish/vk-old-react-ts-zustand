import { userInfoFetch } from "@/entities/user/model/useFetchPage";
import { useEffect } from "react";

export const useFetchProfile = () => {
  const profile = userInfoFetch((state) => state.profile);
  const isLoading = userInfoFetch((state) => state.isLoading);
  const fetchName = userInfoFetch((state) => state.fetchName);

  useEffect(() => {
    fetchName();
  }, [fetchName]);
  return { profile, isLoading };
};
