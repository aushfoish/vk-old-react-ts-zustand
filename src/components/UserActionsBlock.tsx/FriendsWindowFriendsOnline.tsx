import { useEffect } from "react"
import { userInfoFetch } from "../../UserProfileFetch"
import FriendItem from "./FriendItem"

export const FriendsWindowFriendsOnline = () => {

    const {fetchFriendsOnline, friendsOnlineArray} = userInfoFetch()

    useEffect(() => {
        fetchFriendsOnline()
    }, [])



    return (
        <div className="friendlist">
            {friendsOnlineArray?.map((friend) => (
                <FriendItem
                    key={friend.id} 
                    name={friend.name}
                    src={friend.userpic}/>
            ))
                

                }
            </div>
    )
}

