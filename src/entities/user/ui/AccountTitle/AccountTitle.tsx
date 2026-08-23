import styles from './AccountTitle.module.scss'
import { useSelectFirstname, useSelectLastname } from "@/entities/user/model/useFetchPage"

export const AccountTitle = () => {

    const firstname = useSelectFirstname()
    const lastname = useSelectLastname()
    const fname = firstname || ''
    const lname = lastname || ''
    const combinedName = `${fname} ${lname}`.trim()

    const fullname = combinedName || "страница пользователя"

    return (
          <h2 className={styles.pageTitle}>{fullname}</h2>
    )
}

