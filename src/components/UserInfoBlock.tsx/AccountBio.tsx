import { useEffect } from "react"
import { userInfoFetch } from "../../UserProfileFetch"




const AccountBio = () => {

    const {profile, isLoading, fetchName} = userInfoFetch()

    useEffect(() => {
        fetchName()
    }, [fetchName])

    const fullName = `${profile?.firstname} ${profile?.lastname}`
    
    return (
        
        <div className="user-name">
              <h2 className="account-name">{isLoading && !profile ? 'Вот вот узнаем имя пользоватея..' : fullName}</h2>
              <p className="bio">{isLoading && !profile ? 'щас щас...' : profile?.bio}</p>
        </div>
        
        
    )
}

export default AccountBio