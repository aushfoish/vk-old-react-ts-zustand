import { type UserPosts } from "@/entities/posts/model/useWallStore";
import { useQuery } from "@tanstack/react-query";

const HEADERS = {
  apikey: "sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y",
  Authorization: "Bearer sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y",
  "Content-Type": "application/json",
};

export const useFetchPosts = () => {
  return useQuery<UserPosts[]>({
    queryKey: ["profileWallPosts"],
    queryFn: async () => {
      const postsRes = await fetch(
        "https://tyekwqioulapfagzpswr.supabase.co/rest/v1/posts?order=date.desc",
        {
          method: "GET",
          headers: HEADERS,
        },
      );
      if (!postsRes.ok) throw new Error("Произошла чудовищная ошибка!!!");
      

      const postsData = await postsRes.json();
      return Array.isArray(postsData) ? postsData : [];
      
    },
    staleTime: 5 * 60 * 1000,
  });
};
