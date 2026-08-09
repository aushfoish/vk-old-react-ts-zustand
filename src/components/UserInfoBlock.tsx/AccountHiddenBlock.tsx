import PersonalInfo from "./PersonalInfo"
import { selectContacts, selectPersonal, userInfoFetch } from "../../UserProfileFetch"
import { motion } from "framer-motion"


export const AccountHiddenBlock = () => {

    const personalInfo = userInfoFetch(selectPersonal)
    const contactsInfo = userInfoFetch(selectContacts)
    
    

    if (personalInfo) {
        return (
            <motion.div 
                className="user-info"
                initial={{opacity: 0, height: 0}}
                animate={{opacity: 1, height: 'auto'}}
                exit={{opacity: 0, height: 0}}
                style={{overflow: 'hidden'}}
            >
                
                <div className="contacts-info">


                    <h3 className="info-header">Контактная информация</h3>

                    {(contactsInfo?.map((item) => 
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

                        {(personalInfo?.map((item) => 
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

            </motion.div>
            )}
            
}