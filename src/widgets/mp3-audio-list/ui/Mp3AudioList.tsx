import { Mp3ListItem } from "@/entities/mp3-player/ui/Mp3ListItem/Mp3ListItem";
import { Mp3Aside } from "../../mp3-aside/ui/Mp3Aside";
import { userMusicFetch } from "@/entities/mp3-player/model/useMusicStore";
import { AudioItemSkeleton } from "@/shared/ui/SkeletonAudioList/SkeletonAudioItem";
import styles from './Mp3AudioList.module.scss'

export const Mp3AudioList = () => {
  const playlist = userMusicFetch((state) => state.playlist);
  const isPlaying = userMusicFetch((state) => state.isPlaying);
  const currentTrack = userMusicFetch((state) => state.currentTrack);
  const trackPlay = userMusicFetch((state) => state.trackPlay);

  return (
    <div className={styles.mp3TrackList}>
      <div className={styles.mp3ListItems}>
        
        { playlist ? 
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
            
          )) : <AudioItemSkeleton />}
          
      </div>

      <Mp3Aside />
    </div>
  );
};
