interface InputProps {
    placeholder: string,
    id: string,
    label: string,
    className: string,
    type: string,
    onFocus?: () => void,
    onBlur?: () => void,
    
}

const Input = (props: InputProps) => {

    

    const {
        placeholder,
        id,
        label,
        className,
        type,
        onFocus,
        onBlur,
    } = props

    return (
        <>
        <label className={`input-label ${className}`} htmlFor={id}>{label}</label>
        <input className="input-post" type={type} id={id} placeholder={placeholder} onFocus={onFocus} onBlur={onBlur}></input>
        </>
        
    )
}

export default Input