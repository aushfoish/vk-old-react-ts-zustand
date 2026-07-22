import { userInfoFetch } from "../../UserProfileFetch"

const UserPicture = () => {

    const profile = userInfoFetch((state) => state.profile)
    const isLoading = userInfoFetch((state) => state.isLoading)

    if (isLoading) return <div className="account-title">Загружаю заголовок..</div> 
    if (!profile) return <div className="account-title">данные не найдены</div>

    return (
        <div className="user-picture">
              <img alt={`фотография пользователя ${profile.firstname} ${profile.lastname}`} className="user-profile-picture" src={profile.avatar}></img>
        </div>
    )
}

export default UserPicture