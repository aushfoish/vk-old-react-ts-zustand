import styles from '@/shared/ui/Loader/Loader.module.scss'

interface LoaderProps {
    className?: string;
}
export const Loader = (props:LoaderProps) => {
    const {className} = props
    return (
        <div className={`${styles.loader} ${className || ''}`} aria-label='Загрузка..'>
            <span />
            <span />
            <span />
        </div>
    )
}