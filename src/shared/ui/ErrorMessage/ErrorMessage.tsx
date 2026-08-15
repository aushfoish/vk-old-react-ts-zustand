interface ErrorMessage {
    children: React.ReactNode
    id: string
    classname: string
}

export const ErrorMessage = (props:ErrorMessage) => {

    const {children, id, classname} = props

    return (
        <>
            <div className={`error-message ${classname}`} id={id}>{children}</div>
        </>
        
    )
}