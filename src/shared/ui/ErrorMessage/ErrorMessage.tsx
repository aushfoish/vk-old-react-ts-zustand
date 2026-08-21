import styles from './ErrorMessage.module.scss'

interface ErrorMessage {
    children: React.ReactNode
    id: string
    classname: string
}

export const ErrorMessage = (props:ErrorMessage) => {

    const {children, id, classname} = props

    return (
            <p className={`${styles.errorMessage} ${classname}`} id={id}>{children}</p>
        
    )
}