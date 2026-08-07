import {UserActions} from "./UserActionsBlock.tsx/UserActions"
import {UserFriends} from "./UserActionsBlock.tsx/UserFriends"
import {UserPicture} from "./UserActionsBlock.tsx/MainPagePicture/UserPicture"

const UserIteractions = () => {
    return (
        <div className="user-iteractions">

            <UserPicture />

            <UserActions />

            <UserFriends />
            
            
        </div>
    )
}

export default UserIteractions