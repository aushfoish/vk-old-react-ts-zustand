import type React from "react"

interface Micro_headerProps {
    children: React.ReactNode,
    secondChildren: string,
}

const Micro_header = (props:Micro_headerProps) => {

    const {
        children,
        secondChildren
    } = props

    return (
        <div className="micro_header">
                    <a href="#" className="header-link">{children}</a>
                    {secondChildren?.length > 0 && (
                        <a href="#" className="optional-link">{secondChildren}</a>
                        )}
        </div>
    )
}

export default Micro_header