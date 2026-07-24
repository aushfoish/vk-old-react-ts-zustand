
interface PostAuthorProps {
    label: string
}

export const PostAuthor = (props:PostAuthorProps) => {

    const {
        label
    } = props

    return (
        <div className="post-head">
                <a className="username">{label}</a>
        </div>
    )
}