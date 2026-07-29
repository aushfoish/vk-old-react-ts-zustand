// import { userPostsFetch } from "../UserPostsFetch"
import { useState } from "react"
import Button from "./Interface_parts/Button"
import Input from "./Interface_parts/Input"
import { userPostsFetch } from "../UserPostsFetch"



export const AuthorizationModule = () => {

    // const onSubmitRegistrationData = () => {
    //     console.log('данные отправлены:', username, userpic)
    // }

    const [username, setUsername] = useState('')
    const [userpic, setUserpic] = useState('')

    const authorization = userPostsFetch((state) => state.authorization)

    const handleFileReader = (e: React.ChangeEvent<HTMLInputElement>) => {
        
                    const files = e.currentTarget.files
                    if (files && files.length > 0) {
                        const file = files[0]
                        const reader = new FileReader()

                        reader.onloadend = () => {
                            if (typeof reader.result === 'string') {
                                setUserpic(reader.result)
                            }
                        }
                        reader.readAsDataURL(file)
                    }
                
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLElement>) => {
        e.preventDefault()
        authorization(username, userpic)
        console.log('шнурки в стакане', username, userpic)
    }

    return (
        <form className="authorization-inputs-container" onSubmit={handleSubmit}>
            <Input 
                id="username"
                placeholder="введите ваше имя.."
                type='text'
                label='поле ввода имени'
                className="hidden"
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
                />
            <Input
                id="userpic"
                placeholder="добавьте ваше фото.."
                type="file"
                label='поле добавления фото пользователя'
                className="hidden"
                onChange={handleFileReader}
                />
            <Button type='submit'
            className="post"
            children="Зарегистрироваться"

            />
        </form>
    )
}