import type React from "react"

interface Micro_headerProps {
    children: React.ReactNode,
    secondChildren?: string,
    count: string
}

export const Micro_header = (props:Micro_headerProps) => {

    const {
        children,
        secondChildren,
        count
    } = props

    return (
        <div className="micro_header">
                    <a href="#" className="header-link">{children}</a>
                    {secondChildren && secondChildren?.length > 0 && (
                        <a href="#" className="optional-link">{secondChildren}</a>
                        )}
                    {count && count.length > 0 && <div className="counter">{count}</div>}
        </div>
    )
}

