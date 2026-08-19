import { userMusicFetch } from "@/entities/mp3-player/model/useMusicStore";
import { Mp3AudioList } from "@/widgets/mp3-audio-list";
import { Mp3AudioHeader } from "@/widgets/mp3-player-header";
import { useEffect } from "react";

export const AudioPage = () => {
  const playlist = userMusicFetch((state) => state.playlist);
  const isLoading = userMusicFetch((state) => state.isLoading);
  const fetchPlaylist = userMusicFetch((state) => state.fetchPlaylist);

  useEffect(() => {
    fetchPlaylist();
  }, [fetchPlaylist]);

  return (
    <div className="music-player">
      {isLoading === false && playlist !== null && (
        <>
          <Mp3AudioHeader />
          <Mp3AudioList />
        </>
      )}
    </div>
  );
};
