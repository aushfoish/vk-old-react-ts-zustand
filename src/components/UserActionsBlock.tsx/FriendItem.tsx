interface FriendItemProps {
    name: string,
    lastname: string,
    src: string,
    id: string,
}

const FriendItem = (props:FriendItemProps) => {

    const {
        name,
        lastname,
        src,
        id,
    } = props

    return (
        <div className="friend" id={id}>
            <img src={src}></img>
            <a className="name">
            {name} {lastname}
            </a>
        </div>
    )
}

export default FriendItem