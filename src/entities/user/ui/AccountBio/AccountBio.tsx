import { selectBio, selectFirstname, selectLastname, userInfoFetch } from "@/UserProfileFetch"

export const AccountBio = () => {

    const firstname = userInfoFetch(selectFirstname)
    const lastname = userInfoFetch(selectLastname)
    const bioSelector = userInfoFetch(selectBio)

    const fname = firstname || ''
    const lname = lastname || ''
    const combinedName = `${fname} ${lname}`.trim()

    const fullname = combinedName || "пользователь этой страницы"
    const bio = bioSelector || "является полным бездарем"
    

    
    return (
        
        <div className="user-name">
              <h2 className="account-name">{fullname}</h2>
              <p className="bio">{bio}</p>
        </div>
        
        
    )
}

