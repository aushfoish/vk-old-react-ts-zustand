interface PostTextProps {
    text: string
    id: number
}

export const PostText = (props:PostTextProps) => {

    const {
        text, id
    } = props
    return (
        <div className="text-content" id={String(id)}>
                    <p className="user-content">
                      {text}
                    </p>
        </div>
    )
}