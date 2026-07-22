import FriendsWindowFriends from "./FriendsWindowFriends"
import FriendsWindowHeader from "./FriendsWindowHeader"

interface UserFriendsWindow {
    friendsLength: string,
    label: string,
    id: string,
    secondChildren: string,
}

const UserFriendsWindow = (props:UserFriendsWindow) => {

    const {
        friendsLength,
        label,
        id,
        secondChildren
    } = props

    return (
        <>
            <FriendsWindowHeader 
                friendsLength={friendsLength}
                children={label}
                id={id}
                secondChildren={secondChildren}/>

            <FriendsWindowFriends />
        </>
        
    )
}

export default UserFriendsWindow