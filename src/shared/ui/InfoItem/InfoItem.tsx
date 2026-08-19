import styles from './InfoItem.module.scss'

interface InfoItemProps {
    label: string
}

export const InfoItem = (props: InfoItemProps) => {

    const {
        label
    } = props

    return (
        <p className={styles.contentData}>{label}</p>
    )
}