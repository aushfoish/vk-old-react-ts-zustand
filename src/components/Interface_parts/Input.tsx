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
    classInput?: string
    maxLength?: number
    
}

const Input = (props: InputProps) => {

    

    const {
        placeholder,
        id,
        label,
        className,
        classInput,
        type,
        onFocus,
        onBlur,
        onChange,
        maxLength,
        value
    } = props

    return (
        <>
          <label className={`input-label ${className}`} htmlFor={id}>{label}</label>
          <input className={`input-post ${classInput}`} type={type} id={id}  placeholder={placeholder} maxLength={maxLength} onFocus={onFocus} onBlur={onBlur} onChange={onChange} value={value}></input>
        </>
        
    )
}

export default Input