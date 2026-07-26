import type React from "react"
import { Mp3ItemTime } from "./Mp3ItemTime"


interface Mp3ListItemProps {
    children: React.ReactNode,
    title: string,
    band: string,
    audioSrc: string,
    id: string,
    playOnClick: () => void,
    index:number,
    time: string
}

const Mp3ListItem = (props:Mp3ListItemProps) => {

    const {
        children,
        title,
        band,
        audioSrc,
        id,
        playOnClick,
        time
        
    } = props




    
    
    return (
        <div className="track" onClick={(() => playOnClick())}>
                    <button className="play" id={id}>{children}</button>
                    <div className="track-name">
                        <p className="music-name">{title}</p>
                        <div className="hyphen">-</div>
                        <p className="band-name">{band}</p>
                    </div>
                    <Mp3ItemTime label={time}/>
                  
                    <div className="audio-file">
                        <audio className="audio" src={audioSrc} id={id}></audio>
                    </div>
                  
        </div>
    )
}

export default Mp3ListItem