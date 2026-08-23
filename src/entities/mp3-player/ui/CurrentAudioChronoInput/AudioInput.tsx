import { Input } from "@/shared/ui";
import { userMusicFetch } from "../../model/useMusicStore";
import styles from './AudioInput.module.scss'

export const AudioInput = () => {
  const currentTimeChanger = userMusicFetch(
    (state) => state.currentTimeChanger,
  );
  const currentTotalSeconds = userMusicFetch(
    (state) => state.currentTotalSeconds,
  );
  const currentTrackTime = userMusicFetch((state) => state.currentTrackTime);

  return (
    <div className="mp3-track-line">
      <Input
        containerClass="mp3-chrono-input"
        className="visuallyHidden"
        classInput={styles.mp3Input}
        id="mp3-chrono"
        label="координаты длительности текущей композиции"
        type="range"
        onInput={currentTimeChanger}
        value={currentTrackTime || 0}
        min={0}
        max={currentTotalSeconds || 0}
      />
    </div>
  );
};
