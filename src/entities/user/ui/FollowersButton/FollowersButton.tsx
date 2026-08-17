import { nameDeclension } from "@/entities/user/lib/nameDeclesion"
import { selectFirstname, userInfoFetch } from "@/entities/user/model/useFetchPage"

export const FollowersButton = () => {

    const firstname = userInfoFetch(selectFirstname)
    const name = firstname || "пользователь"

    return (
        <div className="followers-button">
                <a href='#' className="followers">{`Подписота ${nameDeclension(name)}`}</a>
                <a href='#' className="followers" id="followers-counter">25</a>
        </div>
    )
}