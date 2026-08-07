// import { userPostsFetch } from "../UserPostsFetch"
import { useEffect, useRef, useState } from "react"
import Button from "./Interface_parts/Button"
import Input from "./Interface_parts/Input"
import { userPostsFetch } from "../UserPostsFetch"
import { ErrorMessage } from "./Interface_parts/ErrorMessage"

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

    

    const [username, setUsername] = useState('')
    const [userpic, setUserpic] = useState('')
    const [error, setError] = useState(false)

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
        if (userPic !== '') {
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
    const imageCompression = (userpic: string) => {
        const canvas = canvasRef.current

        if (!canvas) return 
        if (canvas) {
            const ctx = canvas.getContext('2d')
            const img = new Image()
            img.src = userpic

            img.onload = () => {
                ctx?.drawImage(img, 0, 0, 40, 40)
                const scenario = 'userpic'
                const imageExt = 'jpg'
                const bucket = 'https://tyekwqioulapfagzpswr.supabase.co/storage/v1/object/pictures'
                canvas.toBlob((readyBlob) => {uploadAndProceedPicture(readyBlob, bucket, imageExt, scenario)}, 'image/jpeg', 0.8)
                
            }
        }
    }

    

    

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const inputsCheck = (username !== '' && userpic !== '')
        if (inputsCheck === false) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
        } else if (inputsCheck === true) {
            authorization(username, userpic)
            console.log('шнурки в стакане', username, userpic)
            onClose()
        }
        
    }

    return (
        <>
            <div className="window-upper-border">Добровольная авторизация</div>
            <form className="authorization-inputs-container" onSubmit={handleSubmit}>
                <canvas className='hidden' width={40} height={40} ref={canvasRef}></canvas>
                <Input 
                    maxLength={25}
                    id="username"
                    placeholder="введите ваше имя.."
                    type='text'
                    label='Введите имя'
                    className="default-label"
                    value={username}
                    classInput="auth-input"
                    onChange={(e) => setUsername(e.currentTarget.value)}
                    />
                
                    <ErrorMessage 
                        classname={error === true ? 'is-error' : ''}
                        children='Добавьте имя и фото, либо нажмите в самый низ'
                        id="auth-error"
                    />
                <Input
                    id="userpic"
                    placeholder="добавьте ваше фото.."
                    type="file"
                    label='Добавьте ваше фото'
                    className="default-label"
                    classInput="auth-file"
                    onChange={handleFileReader}
                    />
                <div className="auth-buttons">
                    <Button type='submit'
                    className="post"
                    children="Зарегистрироваться"
                    />

                    <button type='button' className="modal-close-button option" onClick={() => {anonymous(), onClose()} }>Не буду регаться</button>
                </div>
                    
            </form>
        </>
        
    )
}