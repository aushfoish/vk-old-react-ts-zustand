import AccountBio from "./AccountBio"
import AccountGallery from "./AccountGallery"
import AccountPersonal from "./AccountPersonal"
import AccountPersonalHidden from "./AccountPersonalHidden"
import AccountPersonalSpoilerButton from "./AccountPersonalSpoilerButton"
import AccountWall from "./AccountWall"
import { useState } from "react"
import { userInfoFetch } from "../../UserProfileFetch"
import { AnimatePresence } from "framer-motion"



const UserInfo = () => {

    const profile = userInfoFetch((state) => state.profile)
    const [infoHidden, setInfoHidden] = useState(true)   

    return (
        <div className="user-info">

            <AccountBio />

            <AccountPersonal />

            { profile !== null && (<AccountPersonalSpoilerButton 
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