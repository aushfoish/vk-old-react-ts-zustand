import styles from './ModalBtn.module.scss'

interface Modal_buttonProps {
className?: string;
onClick: () => void
btnLabel?: string
type?: "button",
}

export const Modal_button = (props:Modal_buttonProps) => {
    const {className = `${styles.modalBtn}`, btnLabel, onClick, type} = props
    return (
        <button className={`${styles.modalBtn} ${className}`.trim()} onClick={onClick} type={type}>
            {btnLabel}
        </button>
    )
}