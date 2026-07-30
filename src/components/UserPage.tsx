import AccountSection from "./AccountPage"
import AccountTitle from "./AccountTitle"
import { userInfoFetch } from "../UserProfileFetch"
import { useEffect, useState } from "react"
import { MainPageAuthorization } from "./MainPageAuthorization"

const UserPage = () => {

    const {profile, isLoading, fetchName} = userInfoFetch()
    const [modalClosed, setModalClosed] = useState(false)

    
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
            { modalClosed === false && (<MainPageAuthorization onCloseModal={() =>setModalClosed(true)}/>)}
            <AccountTitle />

            <AccountSection />
        </>
    )

    

    

    
}

export default UserPage