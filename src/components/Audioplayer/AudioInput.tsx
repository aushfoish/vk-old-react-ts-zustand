import { userMusicFetch } from "../../UserMusicFetch"

interface AudioInputProps {
    type: string,
    id: string,
    label: string
}

const AudioInput = (props:AudioInputProps) => {

    const currentTimeChanger = userMusicFetch((state) => state.currentTimeChanger)
    const currentTotalSeconds = userMusicFetch((state) => state.currentTotalSeconds)
    const currentTrackTime = userMusicFetch((state) => state.currentTrackTime)
    

    const {
        type = 'range',
        id,
        label
    } = props

    return (
        <div className="mp3-track-line">
            <label className="hidden" htmlFor={id} >{label}</label>
            <input type={type} id={id} onInput={currentTimeChanger} value={currentTrackTime || 0} min={0} max={currentTotalSeconds || 0} className="chrono"></input>
        </div>
    )
}

export default AudioInput