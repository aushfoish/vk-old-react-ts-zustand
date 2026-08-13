interface Modal_buttonProps {
className?: string;
label: string;
onClick: () => void
}

export const Modal_button = (props:Modal_buttonProps) => {
    const {className, label, onClick} = props
    return (
        <button className={`modal-close-button ${className}`} onClick={onClick}>
            {label}
        </button>
    )
}