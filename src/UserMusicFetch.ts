import { create } from "zustand"

const audio = new Audio()

interface userMusic {
    id: string,
    band: string,
    title: string,
    src: string,
    duration?: string,
}

export interface userPlaylistState {
    playlist: userMusic[] | null,
    isLoading: boolean,
    fetchPlaylist: () => Promise<void>,
    trackPlay: (track:userMusic) => void,
    isPlaying: boolean,
    currentTrack:  userMusic | null,
    togglePlay: () => void,
    volume: number,
    setVolume: (e: React.InputEvent<HTMLInputElement>) => void,
    currentTimeFormat: string | null,
    currentAudioDuration: () => void,
    currentTimeChanger: (e: React.InputEvent<HTMLInputElement>) => void,
    currentTrackTime: number | null,
    currentTotalSeconds: number | null,
    currentTrackIndex: number | null,
    // indexCheck: () => void
    nextTrack: () => void
    

}

export const userMusicFetch = create<userPlaylistState>((set, get) => ({
    playlist: null,
    isLoading: false,
    isPlaying: false,
    currentTrack: null,
    currentTrackIndex: null,
    currentTimeFormat: null,
    volume: 0.2,
    currentTrackTime: null,
    currentTotalSeconds: null,
    
    
    

    fetchPlaylist: async() => {
        const {currentAudioDuration} = get()
        set({isLoading: true})
        const response = await fetch('http://localhost:3001/userMusic')
        const data = await response.json()
        set({playlist: data, isLoading: false})
        currentAudioDuration()
    },

    trackPlay: (track) => {
        const { currentTrack, togglePlay, volume} = get()
        if (currentTrack?.id === track.id) {
            togglePlay()
            return
        }

        audio.ontimeupdate = () => {
            const totalSeconds = audio.currentTime
            let zero = ''
            const minutes = Math.floor(totalSeconds / 60)
            const sec = Math.floor(totalSeconds % 60)
            
            if (sec < 10) {
                zero = '0'
            } else if (sec > 9) {
                zero = ''
            }
            const time = `${minutes}:${zero}${sec}`
            set({currentTimeFormat: time, currentTotalSeconds:audio.duration, currentTrackTime: audio.currentTime})
            }
        audio.src = track.src
        audio.volume = volume
        audio.play()

        set({currentTrack: track, isPlaying: true});
    },

    togglePlay: () => {
        const {currentTrack, isPlaying} = get()
        if (!currentTrack) return

        if (isPlaying) {
            audio.pause()
            
        } else if (!isPlaying) {
            audio.play()
        }

        set({isPlaying: !isPlaying})
    },

    setVolume: (e) => {
        audio.volume = ((Number(e.currentTarget.value)) / 100)
        set({volume: audio.volume})
    },

    

    currentAudioDuration: async () => {
        const {playlist} = get()
        const durations: number[] = []
        
        if (playlist !== null) {
          for (const track of playlist) {
            const duration = await new Promise<number>((resolve) => {
                const audio = new Audio()
                audio.src = track.src
                audio.preload = 'metadata'
                audio.onloadeddata = () => {
                    resolve(audio.duration)
                };
               
            });
            durations.push(duration) 
        }  
        }
        
        
        
        const fullList = (playlist || []).map((track, index) => {
            const totalSeconds = durations[index];
            let zero = ''
            const minutes = Math.floor(totalSeconds / 60)
            const sec = Math.floor(totalSeconds % 60)
            
            if (sec < 10) {
                zero = '0'
            } else if (sec > 9) {
                zero = ''
            }
            const time = `${minutes}:${zero}${sec}`
        
        return {
            ...track, duration: time
        }
        }) 
        set({playlist: fullList})
        
    },

    
    currentTimeChanger: (e) => {
        audio.currentTime = (Number(e.currentTarget.value))
        set({currentTrackTime: audio.currentTime})
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
        const {currentTrackIndex} = get()

        if (currentTrackIndex !== null) {
            console.log("следующий трек:")
        }

    }
}))