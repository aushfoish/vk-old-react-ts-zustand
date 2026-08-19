interface ColorItemProps {
    color: string
    onClick: () => void
}

export const ColorItem = (props: ColorItemProps) => {

    const {
        color,
        onClick
    } = props

    return (
        <button className="color-item" aria-label={`выбрать цвет ${color}`} style={{width: '20px', height: '20px', backgroundColor: `${color}`, borderStyle: 'none'}} onClick={onClick}>
        </button>
    )
}