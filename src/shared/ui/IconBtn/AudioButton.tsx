import type React from "react"
import styles from './IconBtn.module.scss'
import type { ButtonHTMLAttributes } from "react"

interface AudioButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
    id: string
    onClick?: () => void
    ariaLabel: string
}

export const AudioButton = (props:AudioButton) => {

    const {
        children,
        id,
        onClick,
        ariaLabel
    } = props

    return (
        <button className={styles.iconBtn} id={id} onClick={onClick} type='button' aria-label={ariaLabel}>
                      {children}
        </button> 
    )
}

export default AudioButton