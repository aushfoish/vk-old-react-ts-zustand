import { create } from "zustand";
import { formatTime } from "@/entities/mp3-player/lib/formatTime";
const audio = new Audio();

export interface userMusic {
  id: string;
  band: string;
  title: string;
  src: string;
  duration?: string;
}

export interface userPlaylistState {
  playlist: userMusic[] | [];
  isLoading: boolean;
  trackPlay: (track: userMusic) => void;
  isPlaying: boolean;
  currentTrack: userMusic | null;
  togglePlay: () => void;
  volume: number;
  setVolume: (e: React.InputEvent<HTMLInputElement>) => void;
  currentTimeFormat: string | null;
  currentAudioDuration: () => void;
  currentTimeChanger: (e: React.InputEvent<HTMLInputElement>) => void;
  currentTrackTime: number | null;
  currentTotalSeconds: number | null;
  currentTrackIndex: number | null;
  // indexCheck: () => void
  nextTrack: () => void;
  currentAudioTime: string;
  setPlaylist: (tracks: userMusic[]) => void;
}

export const userMusicFetch = create<userPlaylistState>((set, get) => ({
  playlist: [],
  isLoading: false,
  isPlaying: false,
  currentTrack: null,
  currentTrackIndex: null,
  currentTimeFormat: null,
  volume: 0.2,
  currentTrackTime: null,
  currentTotalSeconds: null,
  currentAudioTime: "--/--",

  setPlaylist: (tracks: userMusic[]) => {
    set({ playlist: tracks });
  },

  trackPlay: (track) => {
    const { currentTrack, togglePlay, volume } = get();
    if (currentTrack?.id === track.id) {
      togglePlay();
      return;
    }

    audio.ontimeupdate = () => {
      const totalSeconds = audio.currentTime;
      const time = String(formatTime(audio.duration));
      const timer = formatTime(totalSeconds);
      set({
        currentTimeFormat: timer,
        currentAudioTime: time,
        currentTotalSeconds: audio.duration,
        currentTrackTime: audio.currentTime,
      });
    };
    audio.src = track.src;
    audio.volume = volume;
    audio.play();

    set({ currentTrack: track, isPlaying: true });
  },

  togglePlay: () => {
    const { currentTrack, isPlaying } = get();
    if (!currentTrack) return;

    if (isPlaying) {
      audio.pause();
    } else if (!isPlaying) {
      audio.play();
    }

    set({ isPlaying: !isPlaying });
  },

  setVolume: (e) => {
    audio.volume = Number(e.currentTarget.value) / 100;
    set({ volume: audio.volume });
  },

  currentAudioDuration: async () => {
    const { playlist } = get();
    const durations: number[] = [];

    if (playlist !== null) {
      for (const track of playlist) {
        const duration = await new Promise<number>((resolve) => {
          const audio = new Audio();
          audio.src = track.src;
          audio.preload = "metadata";

          audio.onloadeddata = () => {
            try {
              resolve(audio.duration);
            } catch (error) {
              console.error(
                error instanceof Error
                  ? error.message
                  : "не удалось загрузить метаданные плейлиста",
              );
            }
          };

          audio.onerror = () => {
            console.error(`не удалось загрузить метаданные трека: ${track.title}`)
            resolve(0)
          }
        });
        durations.push(duration);
      }
    }

    const fullList = (playlist || []).map((track, index) => {
      const totalSeconds = durations[index];
      const time = formatTime(totalSeconds);

      return {
        ...track,
        duration: time,
      };
    });
    set({ playlist: fullList });
  },

  currentTimeChanger: (e) => {
    audio.currentTime = Number(e.currentTarget.value);
    set({ currentTrackTime: audio.currentTime });
  },

  // indexCheck: () => {
  //     const {currentTrack, playlist} = get()

  //     const trackIndex = playlist?.map((track, index) => {
  //         if (currentTrack?.id === track.id) {
  //             set({currentTrackIndex: index})
  //         }

  //     })
  // },

  nextTrack: () => {
    const { currentTrackIndex } = get();

    if (currentTrackIndex !== null) {
      console.log("следующий трек:");
    }
  },
}));
