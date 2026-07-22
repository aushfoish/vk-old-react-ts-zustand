import AccountSection from "./AccountPage"
import AccountTitle from "./AccountTitle"
import { userInfoFetch } from "../UserProfileFetch"
import { useEffect } from "react"

const UserPage = () => {

    const {profile, isLoading, fetchName} = userInfoFetch()

    
       useEffect(() => {
        fetchName()
    }, [fetchName]) 

    if (isLoading === true) {
        console.log("контент загружается")
    } else if (profile === null) {
    return <div className='account-title'>данные не найдены</div>
   } else if (isLoading === false) {
    console.log('контент загружен')
   }

    return (
        <>
            <AccountTitle />

            <AccountSection />
        </>
    )

    

    

    
}

export default UserPage