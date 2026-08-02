import { userInfoFetch } from "../../UserProfileFetch"
import { FriendsWindowFriendsOnline } from "./FriendsWindowFriendsOnline"
import FriendsWindowHeader from "./FriendsWindowHeader"

export const FriendsOnlineBlock = () => {


    const {friendsOnlineCount} = userInfoFetch()

    return (
        <>
            <FriendsWindowHeader 
                    label='Друзья онлайн'
                    children={`${friendsOnlineCount} друзей онлайн`}/>

            <FriendsWindowFriendsOnline />
        </>
        
    )
}