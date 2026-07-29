import { AuthorizationModule } from "./AuthorizationModule"
import { ModalWindow } from "./ModalWindow/ModalWindow"

interface MainPageAuthorizationProps {
    onCloseModal: () => void
}

export const MainPageAuthorization = (props:MainPageAuthorizationProps) => {

    

    const {
        onCloseModal
    } = props

    return (
        <ModalWindow 
            id='authorization'
            children={<AuthorizationModule />}
            label="Регистрация"
            onCloseModal={onCloseModal}
        />
    )
}