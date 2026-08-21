import styles from './ModalBtn.module.scss'

interface Modal_buttonProps {
className?: string;
onClick: () => void
btnLabel?: string
}

export const Modal_button = (props:Modal_buttonProps) => {
    const {className, btnLabel, onClick} = props
    return (
        <button className={`${styles.modalBtn} ${className}`.trim()} onClick={onClick}>
            {btnLabel}
        </button>
    )
}