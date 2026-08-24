import {
  userMusicFetch,
  type userMusic,
} from "@/entities/mp3-player/model/useMusicStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const HEADERS = {
  apikey: "sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y",
  Authorization: "Bearer sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y",
  "Content-Type": "application/json",
};

interface queryResult {
    playlist: userMusic[]
}

export const useFetchMusic = () => {
  const setPlaylist = userMusicFetch((state) => state.setPlaylist);
  const currentAudioDuration = userMusicFetch((state) => state.currentAudioDuration)
  const { data, isLoading, isError, refetch } = useQuery<queryResult>({
    queryKey: ["profilePlaylist"],
    queryFn: async () => {
      const playlistRes = await fetch(
        "https://tyekwqioulapfagzpswr.supabase.co/rest/v1/tracks",
        {
          method: "GET",
          headers: HEADERS,
        },
        
      );
      if (!playlistRes.ok) {
        throw new Error("Произошла чудовищная ошибка!!!");
      }
      
      const playlistData = await playlistRes.json();
      const tracks = Array.isArray(playlistData) ? playlistData : [];
      return {
        playlist: tracks as userMusic[] | [],
      };
    },
    staleTime: 10 * 60 * 1000,
  });

  useEffect(() => {
    if (data) {
      setPlaylist(data.playlist);
      currentAudioDuration()
    }
  }, [data, setPlaylist, currentAudioDuration]);
  return {
    playlist: data?.playlist || null,
    isLoading,
    isFetchPositive: !isError,
    refetch,
  };
};
