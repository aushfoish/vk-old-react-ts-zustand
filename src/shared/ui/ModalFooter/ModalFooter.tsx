import type React from "react"
import styles from './ModalFooter.module.scss'

interface modalFooterProps {
    footer: React.ReactNode
}

export const ModalFooter = (props:modalFooterProps) => {

    const {footer} = props

    return (
        <div className={styles.modalFooter}>
            {footer}
        </div>
    )
}