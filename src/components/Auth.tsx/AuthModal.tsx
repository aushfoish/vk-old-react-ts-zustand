import { AuthorizationModule } from "../AuthorizationModule"

interface AuthModalProps {
    onClose: () => void
}

export const AuthModal = (props:AuthModalProps) => {

    const {onClose} = props

    return (
        <div className="modal-window" >
            <div className="modal-wrapper">
                <div className="modal-content">
                    <div className="window-upper-border">
                        <p className="window-label"></p>
                        <button className="modal-close-button" onClick={onClose}>Закрыть</button>
                    </div>
                    <AuthorizationModule onClose={onClose}/>
                    
                </div>
            </div>
        </div>
    )
}