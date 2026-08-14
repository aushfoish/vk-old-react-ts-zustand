import {Mp3AudioMeta} from "../../features/mp3-set-time/ui/Mp3AudioMeta"
import {PlayerControls} from "../../features/mp3-play-options/ui/PlayerControls"
import {PlayerOptions} from "../../features/mp3-set-volume/ui/PlayerOptions"

export const Mp3AudioHeader = () => {
    return (
        <div className="mp3-header">
                <PlayerControls />
                <Mp3AudioMeta />
                <PlayerOptions />
        </div>
    )
}

