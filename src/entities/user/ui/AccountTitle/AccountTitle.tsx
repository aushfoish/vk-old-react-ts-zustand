import styles from './AccountTitle.module.scss'
import { selectFirstname, selectLastname, userInfoFetch } from "@/entities/user/model/useFetchPage"

export const AccountTitle = () => {

    const firstname = userInfoFetch(selectFirstname)
    const lastname = userInfoFetch(selectLastname)
    const fname = firstname || ''
    const lname = lastname || ''
    const combinedName = `${fname} ${lname}`.trim()

    const fullname = combinedName || "страница пользователя"

    return (
        <div className={styles.accountTitle}>
          <h2 className={styles.pageTitle}>{fullname}</h2>
        </div>
    )
}

