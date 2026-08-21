import styles from './AccountBio.module.scss'
import { selectBio, selectFirstname, selectLastname, userInfoFetch } from "@/entities/user/model/useFetchPage"

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
        
        <div className={styles.userName}>
              <h2 className={styles.accountName}>{fullname}</h2>
              <p className={styles.bio}>{bio}</p>
        </div>
        
        
    )
}

