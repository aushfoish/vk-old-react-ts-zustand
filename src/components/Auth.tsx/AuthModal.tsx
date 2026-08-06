import { motion } from "framer-motion"
import { AuthorizationModule } from "../AuthorizationModule"

interface AuthModalProps {
    onClose: () => void
}

export const AuthModal = (props:AuthModalProps) => {

    const {onClose} = props

    return (
        <motion.div
            className="modal-window"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >

        
            <div className="modal-wrapper">
                <motion.div 
                    className="modal-content auth"
                    initial={{scale: 0.93, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    exit={{scale: 0.93, opacity: 0}}
                    transition={{duration: 0.18, ease: "easeOut"}}
                    onClick={(e) => e.stopPropagation()}
                    >
                    
                    <AuthorizationModule onClose={onClose}/>
                    
                </motion.div>
            </div>
        </motion.div>
    )
}