import { useEffect } from "react"
import { userMusicFetch } from "../../UserMusicFetch"
import {Mp3AudioHeader} from "./Mp3AudioHeader"
import {Mp3AudioList} from "./Mp3AudioList"

export const AudioMainpageVidget = () => {

    const {playlist, isLoading, fetchPlaylist} = userMusicFetch()

    useEffect(() => {
        fetchPlaylist()
    }, [fetchPlaylist])

    return (
        <div className="mp3-vidget">
            { isLoading === false && playlist !== null && (
            <>
                <Mp3AudioHeader />
                <Mp3AudioList />
            </>
                
            )}
        </div>
    )
}
