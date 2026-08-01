// import { userPostsFetch } from "../UserPostsFetch"
import { useEffect, useRef, useState } from "react"
import Button from "./Interface_parts/Button"
import Input from "./Interface_parts/Input"
import { userPostsFetch } from "../UserPostsFetch"

interface AuthorizationModuleProps {
    onClose: () => void
}

export const AuthorizationModule = (props:AuthorizationModuleProps) => {

    const {
        onClose
    } = props

    // const onSubmitRegistrationData = () => {
    //     console.log('данные отправлены:', username, userpic)
    // }

    

    const [username, setUsername] = useState('Меня уронили в детстве и я не вписал имя при авторизации')
    const [userpic, setUserpic] = useState('https://sun9-47.vkuserphoto.ru/s/v1/ig2/rfOjqk1a0iYxtEfAKCjOo4kI1knPODAoOqdFTAb4_0a-vICXkOqqXgbrsLfre6tKt-A7G1EXkprYNnd1uFyyZ27k.jpg?quality=95&as=32x32,40x40&from=bu&u=lex3t8vsnVkGp_wqpU2osc52wlXoJXzLoeZaL0IPAMo&cs=40x0')

    const authorization = userPostsFetch((state) => state.authorization)
    const userPic = userPostsFetch((state) => state.userPic)
    const authCheck = userPostsFetch((state) => state.authCheck)
    const anonymous = userPostsFetch((state) => state.anonymous)
    const uploadAndProceedPicture = userPostsFetch((state) => state.uploadAndProceedPicture)

    useEffect(() => {
        const loginData = localStorage.getItem('userdata')
        if (loginData) {
            authCheck()
            onClose() 
        }
            
                   
    }, [])

    useEffect(() => {
        if (userPic !== null) {
            setUserpic(userPic)
        }
    }, [userPic])
    
    const handleFileReader = (e: React.ChangeEvent<HTMLInputElement>) => {
            
                        const files = e.currentTarget.files
                        if (files && files.length > 0) {
                            const file = files[0]
                            const reader = new FileReader()

                            reader.onloadend = () => {
                                if (typeof reader.result === 'string') {
                                    const picToCompress = reader.result
                                    imageCompression(picToCompress)
                                }
                            }
                            reader.readAsDataURL(file)
                        }
                    
        }

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const canvas = canvasRef.current
    const imageCompression = (userpic: string) => {
        if (!canvas) return 
        if (canvas) {
            const ctx = canvas.getContext('2d')
            const img = new Image()
            img.src = userpic

            img.onload = () => {
                ctx?.drawImage(img, 0, 0, 40, 40)
                const imageExt = 'jpg'
                const bucket = 'https://tyekwqioulapfagzpswr.supabase.co/storage/v1/object/pictures'
                canvas.toBlob((readyBlob) => {uploadAndProceedPicture(readyBlob, bucket, imageExt)}, 'image/jpeg', 0.8)
                
            }
        }
    }

    

    

    const handleSubmit = (e: React.ChangeEvent<HTMLElement>) => {
        e.preventDefault()
        const inputsCheck = (username.length > 0 || userpic.length > 0)
        if (inputsCheck === false) {
            console.log('либо вводи данные, либо жми другую кнопку')
        } else if (inputsCheck === true) {
            authorization(username, userpic)
            console.log('шнурки в стакане', username, userpic)
            onClose()
        }
        
    }

    return (
        <form className="authorization-inputs-container" onSubmit={handleSubmit}>
            <canvas className='hidden' width={40} height={40} ref={canvasRef}></canvas>
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
            <button type='button' className="modal-close-button option" onClick={() => {anonymous(), onClose()} }>Не буду регаться</button>
        </form>
    )
}