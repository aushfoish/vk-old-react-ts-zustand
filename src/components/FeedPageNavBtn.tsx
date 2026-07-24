import type React from "react"

interface FeedPageNavBtnProps {
        children: React.ReactNode
    }

const FeedPageNavBtn = (props: FeedPageNavBtnProps) => {

    

    const {
        children,
    } = props

    return (
        <button className="feed-navigation">{children}</button>
    )
}

export default FeedPageNavBtn