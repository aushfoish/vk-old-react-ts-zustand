import { Button } from "@/shared/ui";
import { Gift } from "../lib/Gift";

export const SendGift = () => {
    return (
        <div className="send-gift-button" onClick={Gift}>
            <Button className="send-gift" children="Отправить подарок" />
        </div>
    )

}
