import { userMusicFetch } from "@/entities/mp3-player/model/useMusicStore";
import { Mp3AudioList } from "@/widgets/mp3-audio-list";
import { Mp3AudioHeader } from "@/widgets/mp3-player-header";
import styles from './Mp3Player.module.scss'
import { useFetchMusic } from "@/entities/mp3-player/model/useFetchMusic";

export const AudioPage = () => {
  const {playlist} = useFetchMusic()
  const isLoading = userMusicFetch((state) => state.isLoading);
 

  return (
    <div className={styles.musicPage}>
      <Mp3AudioHeader />
      {isLoading === false && playlist !== null && (
          <Mp3AudioList />
      )}
    </div>
  );
};
