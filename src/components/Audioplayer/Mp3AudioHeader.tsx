import Mp3AudioMeta from "./Mp3AudioMeta"
import PlayerControls from "./PlayerControls"
import PlayerOptions from "./PlayerOptions"

const Mp3AudioHeader = () => {
    return (
        <div className="mp3-header">
                <PlayerControls />
                <Mp3AudioMeta />
                <PlayerOptions />
        </div>
    )
}

export default Mp3AudioHeader