import type React from "react"

interface AudioButton {
    children: React.ReactNode
    id: string
    onClick?: () => void
}

const AudioButton = (props:AudioButton) => {

    const {
        children,
        id,
        onClick
    } = props

    return (
        <button className="mp3-control" id={id} onClick={onClick}>
                      {children}
        </button> 
    )
}

export default AudioButton