import { Mp3AudioMetaInfo } from "@/entities/mp3-player/ui/CurrentAudioMetaInfo/Mp3AudioMetaInfo";
import styles from './Mp3AudioMeta.module.scss'
import { Input } from "@/shared/ui";
import { userMusicFetch } from "@/entities/mp3-player/model/useMusicStore";

export const Mp3AudioMeta = () => {
  const currentTimeChanger = userMusicFetch(
    (state) => state.currentTimeChanger,
  );
  const currentTotalSeconds = userMusicFetch(
    (state) => state.currentTotalSeconds,
  );
  const currentTrackTime = userMusicFetch((state) => state.currentTrackTime);

  return (
    <div className={styles.audioMetaData}>
      <Mp3AudioMetaInfo />
      <Input
        containerClass="mp3-chrono-input"
        className="visuallyHidden"
        classInput={styles.mp3Input}
        id="mp3-chrono"
        label="координаты длительности текущей композиции"
        type="range"
        onChange={currentTimeChanger}
        value={currentTrackTime || 0}
        min={0}
        max={currentTotalSeconds || 0}
      />
    </div>
  );
};
