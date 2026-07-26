import type React from "react"

interface ButtonProps {
    className: string,
    children: React.ReactNode
    onClick: () => void
}

const Button = (props:ButtonProps) => {

    

    const {
        className,
        children,
        onClick
    } = props

    return (
        <button 
            className={`button ${className}`}
            onClick={onClick}
            >
                {children}
        </button>
    )
}

export default Button