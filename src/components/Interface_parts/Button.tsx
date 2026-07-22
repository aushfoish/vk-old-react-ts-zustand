import type React from "react"

interface ButtonProps {
    className: string,
    children: React.ReactNode
}

const Button = (props:ButtonProps) => {

    const {
        className,
        children
    } = props

    return (
        <button 
            className={`button ${className}`}
            >
                {children}
        </button>
    )
}

export default Button