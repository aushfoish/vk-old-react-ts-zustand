import { useEffect } from "react"
import { userInfoFetch } from "../../UserProfileFetch"
import FriendsWindowHeader from "./FriendsWindowHeader"
import { FriendsWindowFriendsOnline } from "./FriendsWindowFriendsOnline"


export const UserFriendsWindow = () => {

    const {fetchFriendsOnline, friendsOnlineCount} = userInfoFetch()

    useEffect(() => {
        fetchFriendsOnline()
    }, [])

    return (
        <>
            <FriendsWindowHeader 
                label='Друзья онлайн'
                children={`${friendsOnlineCount} друзей онлайн`}/>

            <FriendsWindowFriendsOnline />
        </>
        
    )
}

export default UserFriendsWindow