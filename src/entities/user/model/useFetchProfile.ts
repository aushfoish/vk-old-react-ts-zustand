import type { Friend, user } from "@/entities/user/model/useFetchPage";
import { useQuery } from "@tanstack/react-query";
import { supabaseFetch } from "@/shared/api";



export const useFetchProfile = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["profileOwner"],
    queryFn: async () => {
      const [profileRes, friendsRes, onlineRes] = await Promise.all([
        supabaseFetch("/rest/v1/profile", {
          method: "GET",

        }),
        supabaseFetch(
          "/rest/v1/rpc/get_all_friends_widget",
          {
            method: "GET",

          },
        ),
        supabaseFetch(
          "/rest/v1/rpc/get_online_friends_widget",
          {
            method: "GET",

          },
        ),
      ]);
      if (!profileRes.ok || !friendsRes.ok || !onlineRes.ok) {
        throw new Error("Произошла чудовищная ошибка!!!")
      }

      const profileData = await profileRes.json()
      const friendsData = await friendsRes.json()
      const onlineFrData = await onlineRes.json()

      return {
        profile: profileData[0] as user,
        friendsCount: friendsData.totalCount as number,
        friendsArray: (friendsData.friends || []) as Friend[],
        friendsOnlineCount: onlineFrData.totalCount as number,
        friendsOnlineArray: (onlineFrData.friends || []) as Friend[],
      }
    },
    staleTime: 3 * 60 * 1000
  });
  return {
    profile: data?.profile || null,
    friendsCount: data?.friendsCount || 0,
    friendsArray: data?.friendsArray || [],
    friendsOnlineCount: data?.friendsOnlineCount || 0,
    isLoading,
    isFetchPositive: !isError,
    refetch
  }
};
