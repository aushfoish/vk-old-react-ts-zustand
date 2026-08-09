import type React from "react"

interface modalFooterProps {
    footer: React.ReactNode
}

export const ModalFooter = (props:modalFooterProps) => {

    const {footer} = props

    return (
        <div className="dialog-footer">
                        {footer}
        </div>
    )
}