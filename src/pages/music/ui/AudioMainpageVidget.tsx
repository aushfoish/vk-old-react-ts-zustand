import { Mp3AudioList } from "@/widgets/mp3-audio-list"
import { Mp3AudioHeader } from "@/widgets/mp3-player-header"
import styles from './Mp3Player.module.scss'


export const AudioMainpageVidget = () => {



    return (
            <div className={styles.musicWidget}>
                <Mp3AudioHeader />
                <Mp3AudioList />
            </div>

    )
}
