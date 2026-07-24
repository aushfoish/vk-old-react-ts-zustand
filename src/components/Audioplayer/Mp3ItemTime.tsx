

interface currentAudioDurationProps {
    label: string
}

export const Mp3ItemTime = (props:currentAudioDurationProps) => {

    const {
        label
    } = props

    
    
    return (
        <div className="mp3-duration" id='id'>
            <div className="mp3-track-length">{label}</div>
        </div>
    )
}
