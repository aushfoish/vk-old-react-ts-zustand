import AudioInput from "./AudioInput"
import Mp3AudioMetaInfo from "./Mp3AudioMetaInfo"

const Mp3AudioMeta = () => {

    return (
        <div className="audio-meta-data">
                  <Mp3AudioMetaInfo />
                  <AudioInput
                    id='chrono'
                    type='range'
                    label='Громкость воспроизведения'
                  />
        </div>
    )
}

export default Mp3AudioMeta