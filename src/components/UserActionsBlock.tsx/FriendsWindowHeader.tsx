import type React from "react"
import { ActionsMicroHeader } from "./ActionsMicroHeader"

interface FriendsWindowHeaderProps {
    children: React.ReactNode,
    label: string
    
}

const FriendsWindowHeader = (props:FriendsWindowHeaderProps) => {

    const {
        children,
        label
    } = props

    return (
        <div className="friendlist-header">

                <ActionsMicroHeader
                    label={label}
/>

                <div className="friends-counter">
                    <a href="#" className="friendlist-counter" id="friends-count">{children}</a>
                </div>

        </div>
    )
}

export default FriendsWindowHeader