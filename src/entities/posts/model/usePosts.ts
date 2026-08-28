import { type UserPosts } from "@/entities/posts/model/useWallStore";
import { useQuery } from "@tanstack/react-query";
import { supabaseFetch } from "@/shared/api";



export const useFetchPosts = () => {
  return useQuery<UserPosts[]>({
    queryKey: ["profileWallPosts"],
    queryFn: async () => {
      const postsRes = await supabaseFetch(
        "/rest/v1/posts?order=date.desc",
        {
          method: "GET",
        },
      );
      if (!postsRes.ok) throw new Error("Произошла чудовищная ошибка!!!");
      

      const postsData = await postsRes.json();
      return Array.isArray(postsData) ? postsData : [];
      
    },
    staleTime: 5 * 60 * 1000,
  });
};
