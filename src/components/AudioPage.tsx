import Mp3AudioHeader from "./Audioplayer/Mp3AudioHeader"
import Mp3AudioList from "./Audioplayer/Mp3AudioList"
import { userMusicFetch } from "../UserMusicFetch"
import { useEffect } from "react"


const AudioPage = () => {

    const {playlist, isLoading, fetchPlaylist} = userMusicFetch()

    useEffect(() => {
        fetchPlaylist()
    }, [])




    return (
        <div className="music-player">
        { isLoading === false && playlist !== null && (
            <>
                <Mp3AudioHeader />
                <Mp3AudioList />   
            </>)
        }
           
        
              

        </div>
    )
}

export default AudioPage