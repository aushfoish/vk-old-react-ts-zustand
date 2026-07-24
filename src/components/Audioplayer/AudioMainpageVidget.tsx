import Mp3AudioHeader from "./Mp3AudioHeader"
import Mp3AudioList from "./Mp3AudioList"

export const AudioMainpageVidget = () => {
    return (
        <div className="mp3-vidget">
            <Mp3AudioHeader />
            <Mp3AudioList />
        </div>
    )
}
