import { useEffect } from "react"
import { userInfoFetch } from "../../UserProfileFetch"
import FriendsWindowFriends from "./FriendsWindowFriends"
import FriendsWindowHeader from "./FriendsWindowHeader"



export const UserFriendsOnline = () => {

    const {friendsCount, fetchFriends} = userInfoFetch()

    useEffect(() => {
        fetchFriends()
    }, [])

    

    

    return (
        <>
            <FriendsWindowHeader 
                children={`${friendsCount} друзей`}
                label="Друзья"
                />

            <FriendsWindowFriends />
        </>
        
    )
}

