// import { title } from "framer-motion/client";
import { Input } from "../../shared/ui/Input/Input";
import { userMusicFetch } from "../../UserMusicFetch";
import { Mp3AudioMetaInfo } from "./Mp3AudioMetaInfo";

export const Mp3AudioMeta = () => {
  const currentTimeChanger = userMusicFetch(
    (state) => state.currentTimeChanger,
  );
  const currentTotalSeconds = userMusicFetch(
    (state) => state.currentTotalSeconds,
  );
  const currentTrackTime = userMusicFetch((state) => state.currentTrackTime);

  return (
    <div className="audio-meta-data">
      <Mp3AudioMetaInfo
        
      />
      <Input
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
