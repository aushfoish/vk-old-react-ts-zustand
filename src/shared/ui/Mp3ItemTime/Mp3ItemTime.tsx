import styles from './Mp3Duration.module.scss'

interface currentAudioDurationProps {
    label: string
}

export const Mp3ItemTime = (props:currentAudioDurationProps) => {

    const {
        label
    } = props

    
    
    return (
        <div className={styles.mp3Duration}>
            <div className={styles.mp3Length}>{label}</div>
        </div>
    )
}
