import type React from "react"

interface AudioButton {
    children: React.ReactNode
    id: string
}

const AudioButton = (props:AudioButton) => {

    const {
        children,
        id
    } = props

    return (
        <button className="mp3-control" id={id}>
                      {children}
        </button> 
    )
}

export default AudioButton