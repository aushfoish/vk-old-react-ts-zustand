import UserFriendsWindow from "./UserFriendsWindow"

const UserFriends = () => {
    return (
        <div className="friends-block">

              <UserFriendsWindow 
              label="Друзья"
              secondChildren="новости"
              friendsLength={`${25} друзей`}
              id='friends-in-common'/>

              <UserFriendsWindow 
              label='Друзья онлайн'
              secondChildren=""
              friendsLength={`${14} друзей онлайн`}
              id='friends-online'/>
        </div>
    )
}

export default UserFriends