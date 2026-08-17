import { selectAvatar, selectFirstname, selectLastname, userInfoFetch } from "@/entities/user/model/useFetchPage"
import placeholder from "@/shared/assets/currentuser-placeholders-array/exited.png"


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

