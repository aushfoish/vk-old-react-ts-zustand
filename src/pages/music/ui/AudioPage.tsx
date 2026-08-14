
import { userMusicFetch } from "@/UserMusicFetch";
import { Mp3AudioList } from "@/widgets/mp3-audio-list";
import { Mp3AudioHeader } from "@/widgets/mp3-player-header";
import { useEffect } from "react";

export const AudioPage = () => {
  const { playlist, isLoading, fetchPlaylist } = userMusicFetch();

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
