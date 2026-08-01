interface InputProps {
    placeholder: string,
    id: string,
    label: string,
    className: string,
    type: string,
    onFocus?: () => void,
    onBlur?: (e: React.FocusEvent) => void,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string
    
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
        onChange,
        
    } = props

    return (
        <>
        <label className={`input-label ${className}`} htmlFor={id}>{label}</label>
        <input className="input-post" type={type} id={id}  placeholder={placeholder} onFocus={onFocus} onBlur={onBlur} onChange={onChange}></input>
        </>
        
    )
}

export default Input