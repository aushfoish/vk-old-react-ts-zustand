import { Button } from "@/shared/ui"
import { useSubscribe } from "../lib/subscribe"


export const Follow = () => {
    const {subscribe} = useSubscribe()
    return (
        <div className="follow-button">
                        <Button 
                          className="follow"
                          children="Подписаться"
                          onClick={subscribe}
                        />
        </div>
    )
}