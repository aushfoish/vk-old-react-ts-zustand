import { Input } from "@/shared/ui";
import { userMusicFetch } from "@/entities/mp3-player/model/useMusicStore";
import styles from './Options.module.scss'

export const PlayerOptions = () => {
  const setVolume = userMusicFetch((state) => state.setVolume);

  return (
        <Input containerClass={styles.volumeSettings} className="visuallyHidden" label="настройте громкость воспроизведения" classInput={styles.volumeRange} type="range" id="volume-range" onInput={setVolume}/>
  );
};
