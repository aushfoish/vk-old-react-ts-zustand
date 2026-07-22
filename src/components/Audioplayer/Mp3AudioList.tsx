import Mp3Aside from "./Mp3Aside"
import Mp3ListItem from "./Mp3ListItem"
import { userMusicFetch } from "../../UserMusicFetch"

const Mp3AudioList = () => {

    const playlist = userMusicFetch((state) => state.playlist)
    const isLoading = userMusicFetch((state) => state.isLoading)
    const isPlaying = userMusicFetch((state) => state.isPlaying)
    const currentTrack = userMusicFetch((state) => state.currentTrack)
    const trackPlay = userMusicFetch((state) => state.trackPlay)
    
    

    

    return (
        <div className="mp3-track-list">
                <div className="mp3-track-list-items">
                    {isLoading === false && playlist !== null && (playlist?.map((track, index) => (
                        <Mp3ListItem 
                            index={index}
                            id={track.id}
                            key={track.id}
                            children={ currentTrack?.id === track.id && isPlaying ? '❚❚' : '▶'}
                            title={track.title}
                            band={track.band}
                            audioSrc={track.src}
                            playOnClick={() => trackPlay(track)}
                            time={track.duration ?? '0'}/>)))}
                            
                        
                </div>

                  <Mp3Aside />
                  
        </div>
    )
}

export default Mp3AudioList