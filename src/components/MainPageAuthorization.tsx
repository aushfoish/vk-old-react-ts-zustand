import { AuthModal } from "./Auth.tsx/AuthModal"


interface MainPageAuthorizationProps {
    onCloseModal: () => void
}

export const MainPageAuthorization = (props:MainPageAuthorizationProps) => {

    

    const {
        onCloseModal
    } = props

    return (
        <AuthModal onClose={onCloseModal} />
    )
}