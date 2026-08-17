import { Input } from "../../../../shared/ui/Input/Input";
import { userMusicFetch } from "../../model/useMusicStore";

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
        className="hidden"
        classInput="chrono"
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
