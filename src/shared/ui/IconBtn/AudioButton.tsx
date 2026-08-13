import type React from "react"

interface AudioButton {
    children: React.ReactNode
    id: string
    onClick?: () => void
}

export const AudioButton = (props:AudioButton) => {

    const {
        children,
        id,
        onClick
    } = props

    return (
        <button className="mp3-control" id={id} onClick={onClick} type='button'>
                      {children}
        </button> 
    )
}

export default AudioButton