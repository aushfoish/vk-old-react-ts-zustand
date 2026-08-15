
import { AuthorizationModule } from "@/features/pass-the-authorization/ui/AuthorizationModule";
import { ModalWindow } from "@/shared/ui/ModalWindow/ModalWindow";
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
          <ModalWindow children={<AuthorizationModule onClose={() => close()}/>} id="auth" label="Авторизация" onCloseModal={() => close()}/>
          <Mp3AudioHeader />
          <Mp3AudioList />
        </>
      )}
    </div>
  );
};
