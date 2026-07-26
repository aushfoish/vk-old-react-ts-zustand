import PersonalInfo from "./PersonalInfo"
import { userInfoFetch } from "../../UserProfileFetch"

export const AccountHiddenBlock = () => {

    const profile = userInfoFetch((state) => state.profile)
    const isLoading = userInfoFetch((state) => state.isLoading)
    const profileReady = profile !== null
    const contactsCheck = profileReady ? profile.contacts.length > 0 : null
    const personalCheck = profileReady ? profile.personal.length > 0 : null
    

    if (profileReady) {
        return (
            <div className="user-info">
                
                <div className="contacts-info">


                    <h3 className="info-header">Контактная информация</h3>

                    {!isLoading && contactsCheck && (profile.contacts.map((item) => 
                        <PersonalInfo 
                            key={item.id}
                            children={item.value}
                            label={item.key}
                            id={item.dataset}
                        />
                )
                    )
                    }


                </div>

                <div className="personal-info">


                    <h3 className="info-header">Личная информация</h3>

                        {!isLoading && personalCheck && (profile.personal.map((item) => 
                        <PersonalInfo 
                            key={item.id}
                            children={item.value}
                            label={item.key}
                            id={item.dataset}
                        />
                )
                    )
                    }


                </div>

            </div>
            )}
            
}