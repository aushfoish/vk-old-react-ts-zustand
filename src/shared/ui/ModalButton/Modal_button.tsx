interface Modal_buttonProps {
className?: string;
onClick: () => void
btnLabel?: string
}

export const Modal_button = (props:Modal_buttonProps) => {
    const {className, btnLabel, onClick} = props
    return (
        <button className={`modal-close-button ${className}`} onClick={onClick}>
            {btnLabel}
        </button>
    )
}