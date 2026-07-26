import type React from "react"
import Micro_header from "../Interface_parts/Micro_header"

interface FriendsWindowHeaderProps {
    children: React.ReactNode,
    friendsLength: string,
    id: string,
    secondChildren: string,
    
}

const FriendsWindowHeader = (props:FriendsWindowHeaderProps) => {

    const {
        children,
        friendsLength,
        id,
        secondChildren
    } = props

    return (
        <div className="friendlist-header" id={id}>

                <Micro_header 
                    children={children}
                    secondChildren={secondChildren}/>

                <div className="friends-counter">
                    <a href="#" className="friendlist-counter" id="friends-count">{friendsLength}</a>
                </div>

        </div>
    )
}

export default FriendsWindowHeader