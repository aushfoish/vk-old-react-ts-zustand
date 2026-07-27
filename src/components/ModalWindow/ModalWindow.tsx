import type React from "react"
import { ModalFooter } from "./ModalFooter"

interface ModalWindowProps {
    children: React.ReactNode
    footer?: React.ReactNode
    label: string
    id: string
    onCloseModal: () => void
}

export const ModalWindow = (props:ModalWindowProps) => {

    const {
        children, label, id, footer, onCloseModal
    } = props

    return (
        <div className="modal-window" id={id}>
            <div className="modal-wrapper">
                <div className="modal-content">
                    <div className="window-upper-border">
                        <p className="window-label">{label}</p>
                        <button className="modal-close-button" onClick={onCloseModal}>Закрыть</button>
                    </div>
                    {children}
                    <ModalFooter 
                    footer={footer}/>
                </div>
            </div>
        </div>
    )
}