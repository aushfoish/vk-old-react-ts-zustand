import { selectAvatar, selectFirstname, selectLastname, userInfoFetch } from "../../../UserProfileFetch"
import placeholder from "../MainPagePicture/avatar-placeholder.jpg"


export const UserPicture = () => {

    const avatar = userInfoFetch(selectAvatar)
    const firstname = userInfoFetch(selectFirstname)
    const lastname = userInfoFetch(selectLastname)

    const fname = firstname || ''
    const lname = lastname || ''
    const combinedName = `${fname} ${lname}`.trim()
    const fullname = combinedName || "этой страницы"

    const userpic = avatar || placeholder

    return (
        <div className="user-picture">
              <img alt={`фотография пользователя ${fullname}`} className="user-profile-picture" src={userpic}></img>
        </div>
    )
}

