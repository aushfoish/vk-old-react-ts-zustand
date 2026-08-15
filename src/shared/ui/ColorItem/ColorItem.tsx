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
        <span className="color-item" style={{width: '20px', height: '20px', backgroundColor: `${color}`}} onClick={onClick}>
        </span>
    )
}