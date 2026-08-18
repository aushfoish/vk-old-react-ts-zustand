import { Button } from "@/shared/ui";
import { Gift } from "../lib/Gift";
import styles from "./SendGift.module.scss"


export const SendGift = () => {
    return (
            <Button className={`${styles.sendGift}`} onClick={Gift} children="Отправить подарок" />
    )

}
