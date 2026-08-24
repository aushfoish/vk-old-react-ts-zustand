import styles from './FollowersButton.module.scss'
import { nameDeclension } from "@/entities/user/lib/nameDeclesion"
import { useSelectFirstname } from "@/entities/user/model/useFetchPage"
import { Button } from "@/shared/ui"

export const FollowersButton = () => {

    const firstname = useSelectFirstname()
    const name = firstname || "пользователь"

    return (
        <Button className={styles.followersButton}>
                <p className={styles.followers}>{`Подписота ${nameDeclension(name)}`}</p>
                <p className={styles.followers} id="followers-counter">25</p>
        </Button>
    )
}