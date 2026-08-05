import { AuthorizationModule } from "../AuthorizationModule"

interface AuthModalProps {
    onClose: () => void
}

export const AuthModal = (props:AuthModalProps) => {

    const {onClose} = props

    return (
        <div className="modal-window" >
            <div className="modal-wrapper">
                <div className="modal-content auth">
                    
                    <AuthorizationModule onClose={onClose}/>
                    
                </div>
            </div>
        </div>
    )
}