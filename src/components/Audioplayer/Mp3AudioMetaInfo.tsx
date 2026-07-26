import { userMusicFetch } from "../../UserMusicFetch"


const Mp3AudioMetaInfo = () => {

  const currentTrack = userMusicFetch((state) => state.currentTrack)
  const currentTimeFormat = userMusicFetch((state) => state.currentTimeFormat)

  if (currentTrack !== null) {
    return (
        <div className="track-info">
                    <div className="mp3-track-name">
                      <p className="band-name">{currentTrack.band}</p> <div className="hyphen"> - </div> <p className="music-name">{currentTrack.title}</p>
                    </div>
                    <div className="mp3-duration">
                      <div className="mp3-track-time">
                        {currentTimeFormat}/
                      </div>
                      <div className="mp3-track-length">
                        {currentTrack.duration}
                      </div>
                    </div>
        </div>
        )
  }
    
    
}

export default Mp3AudioMetaInfo