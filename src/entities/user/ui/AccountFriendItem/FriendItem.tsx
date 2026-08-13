interface FriendItemProps {
    name: string,
    src: string,
}

export const FriendItem = (props:FriendItemProps) => {

    const {
        name,
        src,
    } = props

    return (
        <div className="friend">
            <img src={src}></img>
            <a className="name">
            {name}
            </a>
        </div>
    )
}

