import type React from "react"

interface PostTextProps {
    children: React.ReactNode
    id: string
}

export const PostText = (props:PostTextProps) => {

    const {
        children, id
    } = props
    return (
        <div className="text-content" id={id}>
                    <p className="user-content">
                      {children}
                    </p>
        </div>
    )
}