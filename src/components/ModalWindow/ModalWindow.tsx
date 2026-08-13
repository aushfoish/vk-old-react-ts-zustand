import type React from "react"

interface ModalWindowProps {
    children: React.ReactNode
    footer?: React.ReactNode
    label: string
    id: string
    onCloseModal: () => void,
    classname?: string;
}

export const ModalWindow = (props:ModalWindowProps) => {

    const {
        children, label, id, onCloseModal, classname
    } = props

    return (
        <div className={`modal-window ${classname}`} id={id}>
            <div className="modal-wrapper">
                <div className="modal-content">
                    <div className="window-upper-border">
                        <p className="window-label">{label}</p>
                        <button className="modal-close-button" onClick={onCloseModal}>Закрыть</button>
                    </div>
                    {children}
                    
                </div>
            </div>
        </div>
    )
}