import { userMusicFetch} from "@/entities/mp3-player/model/useMusicStore";
import styles from './Mp3AudioMetaInfo.module.scss'

export const Mp3AudioMetaInfo = () => {
  const currentTrack = userMusicFetch((state) => state.currentTrack);
  const timer = userMusicFetch((state) => state.currentTimeFormat);
  const time = userMusicFetch((state) => state.currentAudioTime)
  if (currentTrack !== null) {
    return (
      <div className={styles.trackInfo}>
        <div className={styles.mp3NameCont}>
          <p className={styles.bandName}>{currentTrack.band}</p>{" "}
          <div className={styles.hyphen}> - </div>{" "}
          <p className="music-name">{currentTrack.title}</p>
        </div>
        <div className={styles.mp3Duration}>
          <div className={styles.mp3TrackTimer}>{timer}/</div>
          <div className={styles.mp3TrackTime}>{time}</div>
        </div>
      </div>
    );
  }
};
