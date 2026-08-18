import { Button } from "@/shared/ui"
import styles from './Follow-Button.module.scss'
import { useSubscribe } from "../lib/subscribe"


export const Follow = () => {
    const {subscribe} = useSubscribe()
    return (
        <div className={`${styles.followButton}`}>
                        <Button 
                          className={`${styles.follow}`}
                          children="Подписаться"
                          onClick={subscribe}
                        />
        </div>
    )
}