import styles from './ErrorMessage.module.scss'

interface ErrorMessage {
    children: React.ReactNode
    id: string
    classname: string
    role: string,
}

export const ErrorMessage = (props:ErrorMessage) => {

    const {children, id, classname, role} = props

    return (
            <span className={`${styles.errorMessage} ${classname}`} id={id} role={role}>{children}</span>
        
    )
}