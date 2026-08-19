import styles from './FriendItem.module.scss'

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
        <li className={styles.friend}>
            <img src={src} alt={`фотография пользователя ${name}`}></img>
            <a className={styles.friendName}>
            {name}
            </a>
        </li>
    )
}

