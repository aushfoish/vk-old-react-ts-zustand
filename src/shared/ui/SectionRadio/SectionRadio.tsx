import type React from "react";
import style from './SectionRadiio.module.scss'

interface SectionRadioProps {
    checked: boolean;
    type: string;
    id: string;
    children: React.ReactNode;
    value: string;
    onChange: () => void,
    
}

export const SectionRadio = (props: SectionRadioProps) => {
    const {
        type='radio',
        id,
        checked,
        children,
        value,
        onChange,
    } = props
    return (
        <>
            <input className={style.radioInput} type={type} id={id} value={value} name="gender" checked={checked} onChange={onChange}></input>
            <label className={style.radioLabel} htmlFor={id}>{children}</label>
        </>
        
    )
}

