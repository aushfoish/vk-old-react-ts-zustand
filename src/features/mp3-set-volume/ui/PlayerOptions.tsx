import { Input } from "@/shared/ui";
import { userMusicFetch } from "@/UserMusicFetch";

export const PlayerOptions = () => {
  const setVolume = userMusicFetch((state) => state.setVolume);

  return (
      <div className="mp3-volume-settings">
        <Input className="hidden" label="настройте громкость воспроизведения" classInput="mp3-volume-input" type="range" id="volume-range" onInput={setVolume}/>
      </div>
  );
};
