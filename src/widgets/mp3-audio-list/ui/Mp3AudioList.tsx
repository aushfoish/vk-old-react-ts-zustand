import { Mp3ListItem } from "@/entities/mp3-player/ui/Mp3ListItem/Mp3ListItem";
import { Mp3Aside } from "../../mp3-aside/ui/Mp3Aside";
import { userMusicFetch } from "@/entities/mp3-player/model/useMusicStore";

export const Mp3AudioList = () => {
  const playlist = userMusicFetch((state) => state.playlist);
  const isPlaying = userMusicFetch((state) => state.isPlaying);
  const currentTrack = userMusicFetch((state) => state.currentTrack);
  const trackPlay = userMusicFetch((state) => state.trackPlay);

  return (
    <div className="mp3-track-list">
      <div className="mp3-track-list-items">
        {
          playlist?.map((track, index) => (
            <Mp3ListItem
              index={index}
              id={track.id}
              key={track.id}
              children={currentTrack?.id === track.id && isPlaying ? "❚❚" : "▶"}
              title={track.title}
              band={track.band}
              audioSrc={track.src}
              playOnClick={() => trackPlay(track)}
              time={track.duration ?? "--/--"}
            />
          ))}
      </div>

      <Mp3Aside />
    </div>
  );
};
