// import { userPostsFetch } from "../UserPostsFetch"
import Input from "./Interface_parts/Input"

export const AuthorizationModule = () => {

    // const userName = userPostsFetch((state) => state.userName)
    // const userPic = userPostsFetch((state) => state.userPic)

    return (
        <div className="authorization-inputs-container">
            <Input 
                id="username"
                placeholder="введите ваше имя.."
                type='text'
                label='поле ввода имени'
                className="hidden"
                onInput={(e) => console.log("введено имя", e.currentTarget.value)}
                />
            <Input
                id="userpic"
                placeholder="добавьте ваше фото.."
                type="file"
                label='поле добавления фото пользователя'
                className="hidden"
                onInput={(e) => console.log("добавлено фото", e.currentTarget.value)}
                />
        </div>
    )
}