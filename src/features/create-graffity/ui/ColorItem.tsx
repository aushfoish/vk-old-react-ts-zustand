import styles from './GraffityUI.module.scss'
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
        <button className={styles.colorItem} aria-label={`выбрать цвет ${color}`} style={{width: '20px', height: '20px', backgroundColor: `${color}`, borderStyle: 'none'}} onClick={onClick}>
        </button>
    )
}