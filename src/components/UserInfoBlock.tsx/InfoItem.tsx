import type React from "react"

interface InfoItemProps {
    children: React.ReactNode
}

const InfoItem = (props:InfoItemProps) => {

    const {
        children
    } = props

    return (
        <a href="#" className="language">{children}</a>
    )
}

export default InfoItem