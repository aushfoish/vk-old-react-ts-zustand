import AccountSection from "./AccountPage"
import AccountTitle from "./AccountTitle"
import { userInfoFetch } from "../UserProfileFetch"
import { useEffect, useState } from "react"
import { MainPageAuthorization } from "./MainPageAuthorization"
import { AnimatePresence } from "framer-motion"

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
        <AnimatePresence>
            { modalClosed === false && (
                <MainPageAuthorization onCloseModal={() =>setModalClosed(true)}/>
            )}
        </AnimatePresence>
            
            <AccountTitle />

            <AccountSection />
        </>
    )

    

    

    
}

export default UserPage