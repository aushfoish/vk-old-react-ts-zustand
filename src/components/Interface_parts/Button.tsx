import type React from "react"

interface ButtonProps {
    className: string,
    children: React.ReactNode
    onClick?: () => void
    type?: "submit" | "reset" | "button" | undefined;

}

const Button = (props:ButtonProps) => {

    

    const {
        className,
        children,
        onClick,
        type
    } = props

    return (
        <button 
            type={type}
            className={`button ${className}`}
            onClick={onClick}
            >
                {children}
        </button>
    )
}

export default Button