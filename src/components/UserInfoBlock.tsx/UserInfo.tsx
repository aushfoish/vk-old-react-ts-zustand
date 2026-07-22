import AccountBio from "./AccountBio"
import AccountGallery from "./AccountGallery"
import AccountPersonal from "./AccountPersonal"
import AccountPersonalHidden from "./AccountPersonalHidden"
import AccountPersonalSpoilerButton from "./AccountPersonalSpoilerButton"
import AccountWall from "./AccountWall"
import { useState } from "react"



const UserInfo = () => {

    const [infoHidden, setInfoHidden] = useState(true)   

    return (
        <div className="user-info">

            <AccountBio />

            <AccountPersonal />

            <AccountPersonalSpoilerButton 
                children={infoHidden ? 'Показать подробную информацию' : 'Скрыть подробную информацию'}
                onClick={() => {
                    if (infoHidden) { setInfoHidden(false)} else if (!infoHidden) { setInfoHidden(true)}
                }}
                />
            

            
                
            {infoHidden === false && (<AccountPersonalHidden />)}
            
            <AccountGallery />

            <AccountWall />
        
        </div>
    )
}

export default UserInfo