import { selectFirstname, selectLastname, userInfoFetch } from "@/UserProfileFetch"

export const AccountTitle = () => {

    const firstname = userInfoFetch(selectFirstname)
    const lastname = userInfoFetch(selectLastname)
    const fname = firstname || ''
    const lname = lastname || ''
    const combinedName = `${fname} ${lname}`.trim()

    const fullname = combinedName || "страница пользователя"

    return (
        <div className="account-title">
          <h2 className="h2-title">{fullname}</h2>
        </div>
    )
}

