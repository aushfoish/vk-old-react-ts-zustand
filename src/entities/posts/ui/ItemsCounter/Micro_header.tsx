import type React from "react"
import styles from './MicroHeader.module.scss'

interface Micro_headerProps {
    children: React.ReactNode,
    secondChildren?: string,
    count?: string
}

export const Micro_header = (props:Micro_headerProps) => {

    const {
        children,
        secondChildren,
        count
    } = props

    return (
        <div className={styles.microHeader}>
                    <a href="#" className={styles.headerLink}>{children}</a>
                    {secondChildren && secondChildren?.length > 0 && (
                        <a href="#" className="optional-link">{secondChildren}</a>
                        )}
                    {count && count.length > 0 && <div className="counter">{count}</div>}
        </div>
    )
}

