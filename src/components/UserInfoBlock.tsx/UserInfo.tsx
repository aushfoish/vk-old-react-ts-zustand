import AccountBio from "./AccountBio"
import AccountGallery from "./AccountGallery"
import AccountPersonal from "./AccountPersonal"
import AccountPersonalHidden from "./AccountPersonalHidden"
import AccountPersonalSpoilerButton from "./AccountPersonalSpoilerButton"
import AccountWall from "./AccountWall"
import { useState } from "react"
import { selectContacts, selectPersonal, userInfoFetch } from "../../UserProfileFetch"
import { AnimatePresence } from "framer-motion"



const UserInfo = () => {

    const personalInfo = userInfoFetch(selectPersonal)
    const contactsInfo = userInfoFetch(selectContacts)
    const isHiddenInfoExists = ((personalInfo && personalInfo.length > 0 || contactsInfo && contactsInfo.length > 0))
    const [infoHidden, setInfoHidden] = useState(true)   

    return (
        <div className="user-info">

            <AccountBio />

            <AccountPersonal />

            { isHiddenInfoExists && (<AccountPersonalSpoilerButton 
                children={infoHidden ? 'Показать подробную информацию' : 'Скрыть подробную информацию'}
                onClick={() => {
                    if (infoHidden) { setInfoHidden(false)} else if (!infoHidden) { setInfoHidden(true)}
                }}
                />)}
            

            
            <AnimatePresence>
                {infoHidden === false && (<AccountPersonalHidden />)}
            </AnimatePresence>  
            
            
            <AccountGallery />

            <AccountWall />
        
        </div>
    )
}

export default UserInfo