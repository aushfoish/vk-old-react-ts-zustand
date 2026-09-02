import { create } from "zustand";
import { formatTime } from "@/entities/mp3-player/lib/formatTime";
import type { ChangeEvent } from "react";

export interface userMusic {
  id: string;
  band: string;
  title: string;
  src: string;
  duration?: string;
}

export interface userPlaylistState {
  nextTrack: () => void;
  trackPlay: (track: userMusic) => Promise<void>;
  togglePlay: () => void;
  setVolume: (e: ChangeEvent<HTMLInputElement>) => void;
  currentTimeChanger: (e: ChangeEvent<HTMLInputElement>) => void;
  initAudio: () => void

  isLoading: boolean;
  isPlaying: boolean;
  currentTrack: userMusic | null;
  volume: number;
  currentTimeFormat: string | null;
  currentTrackTime: number | null;
  currentTotalSeconds: number | null;
  currentTrackIndex: number | null;
  // indexCheck: () => void
  currentAudioTime: string;
  audio: HTMLAudioElement | null;
}

export const userMusicFetch = create<userPlaylistState>((set, get) => ({
  isLoading: false,
  isPlaying: false,
  currentTrack: null,
  currentTrackIndex: null,
  currentTimeFormat: null,
  volume: 0.2,
  currentTrackTime: null,
  currentTotalSeconds: null,
  currentAudioTime: "--/--",

  audio: null,

  initAudio: () => {
    if (typeof window === "undefined" || get().audio) return;

    const audio = new Audio();

    audio.addEventListener("timeupdate", () => {
      set({
        currentTrackTime: audio.currentTime,
        currentTimeFormat: formatTime(audio.currentTime),
        currentTotalSeconds: audio.duration || 0,
        currentAudioTime: formatTime(audio.duration || 0),
      });
    });

    set({audio})
  },

  trackPlay: async (track) => {

    if (!get().audio) get().initAudio();

    const { volume, togglePlay, currentTrack, audio } = get();

    if (currentTrack?.id === track.id) {
      togglePlay();
      return;
    }

    if (!audio) return;
    try {
      
      audio.src = track.src;
      audio.volume = volume;

      await audio.play();

      set({ currentTrack: track, isPlaying: true });
    } catch (error) {
      console.error(
        error instanceof Error
          ? error.message
          : "не удалось воспроизвести трек",
      );
    }
  },

  togglePlay: () => {
    const { currentTrack, isPlaying, audio } = get();

    if (!currentTrack) return;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else if (!isPlaying) {
      audio.play();
    }

    set({ isPlaying: !isPlaying });
  },

  setVolume: (e) => {
    const audio = get().audio;
    if (!audio) return;
    audio.volume = Number(e.currentTarget.value) / 100;
    set({ volume: audio.volume });
  },

  currentTimeChanger: (e) => {
    const audio = get().audio;
    if (!audio) return;
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
