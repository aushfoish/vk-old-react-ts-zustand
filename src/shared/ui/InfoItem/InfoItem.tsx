import type React from "react"

interface InfoItemProps {
    children: React.ReactNode
}

export const InfoItem = (props: InfoItemProps) => {

    const {
        children
    } = props

    return (
        <a href="#" className="language">{children}</a>
    )
}