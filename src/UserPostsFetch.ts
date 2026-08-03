import { create } from "zustand";

export interface UserPosts {
    id: number,
    content: string,
    date: string
    username: string | null,
    userPictureSrc: string,
    imageContentSrc: string
}

interface PostToSend {
    content: string | null,
    username: string | null,
    userPictureSrc: string | null,
    imageContentSrc: string | null
}

interface userPostsState {
    posts: UserPosts[] | null,
    isLoading: boolean,
    userFetch: () => Promise<void>
    postsConsoleLog: (posts: UserPosts) => void
    sendPost: () => Promise<boolean>
    setInputPost: (e: React.ChangeEvent<HTMLInputElement>) => void
    isSending: boolean,
    isPostSend: boolean
    userName: string,
    userPic: string,
    contentText: string
    contentPicture: string
    postIsEmpty: boolean
    isTyping: boolean
    inputPost: string
    authorization: (username?: string, userpic?: string) => void,
    authCheck: () => void
    anonymous: () => void
    userIsLogged: boolean,
    uploadAndProceedPicture: (blob: Blob | null, bucket: string, extension: string, scenario: string) => Promise<boolean>
    resetSendStatus: () => void
}

export const userPostsFetch = create<userPostsState>((set, get) => ({
    posts: [],
    isLoading: false,
    isSending: false,
    isPostSend: false,
    userName: 'Я не залогинился',
    userPic: '',
    userIsLogged: false,
    contentText: '',
    contentPicture: '',
    postIsEmpty: true,
    isTyping: false,
    inputPost: '',

    
    authorization: (username, userpic) => {
            set({userName:username, userPic:userpic, userIsLogged: true})
            const userAuthorization = {'userName': username, "userPic": userpic, "userIsLogged": true}
            localStorage.setItem('userdata', JSON.stringify(userAuthorization))
    },

    authCheck: () => {
        const savedData = localStorage.getItem('userdata')
        if (savedData) {
            const dataParse = JSON.parse(savedData)
            set({userName: dataParse.userName, userPic: dataParse.userPic, userIsLogged: dataParse.userIsLogged})
        }
    },
    
    anonymous: () => {
        set({userName: "я не залогинился", userPic: "https://sun9-46.vkuserphoto.ru/s/v1/ig2/ujXhE-AqH4NX91xx7FKgWgJpuOvih28q-1QDO7lZL9PV1QLV_r8cRaBkt-6IyN1eEH_7WhCah_E2fcga2zeaG6WF.jpg?quality=95&as=32x33,40x41&from=bu&u=btLgeCMMxvOpDWSa8seGN6cvU620O6hB1rMCYTTNkm8&cs=40x0", userIsLogged: false})
    },


    userFetch: async() => {
        try {
            
            set ({isLoading: true})
            const response = await fetch('https://tyekwqioulapfagzpswr.supabase.co/rest/v1/posts?order=date.desc', {
                method: 'GET',
                headers: {
                    'apikey': 'sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y',
                    'Authorization': 'Bearer sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y',
                    'Content-Type': 'application/json'
                },
            })
            if (response.ok !== true) {
                throw new Error('Ошибка: не удалось получить данные о постах')
            }
            const data = await response.json()
            set({posts: data, isLoading: false})
        } catch (error) {
            console.error('Ошибка при получении данных:', error)
            set({posts: [], isLoading: false})
        }
    },

    postsConsoleLog: (posts) => {
        if (posts !== null) {
            console.log(posts)
        }
    },

    sendPost: async() => {
        const {userName, userPic, userFetch, contentPicture, inputPost} = get()
        
        const newPost:PostToSend = {
            content: inputPost, 
            username: userName, 
            userPictureSrc: userPic,
            imageContentSrc: contentPicture
        }
        const textOnly = ((inputPost !== '') && !contentPicture)
        const pictureOnly = ((!inputPost) && contentPicture !== '')
        const noContent = (inputPost === '' && contentPicture === '')
        if (noContent) {
            console.log('ты ни пост не чирканул, ни мемчик не забодяжил, ни граффити не намазал, но пост пытаешься отправить, ты ок вообще?')
            return false;
        }
        if (textOnly || pictureOnly) {
            try {
            set ({isSending: true})
            const response = await fetch('https://tyekwqioulapfagzpswr.supabase.co/rest/v1/posts', {
                method: 'POST',
                headers: {
                    'apikey': 'sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y',
                    'Authorization': 'Bearer sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y',
                    'Content-Type': 'application/json',
                    'Prefer': 'return=representation'
                },
                body: JSON.stringify(newPost)
                
            })
            if (response.ok) {
                const result = await response.json()
                set({isSending: false, isPostSend: true, inputPost: '', contentPicture: ''});
                console.log("пост отправлен:", result)
                await userFetch()
                return true
            }
            
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}` )
            }
            
        } catch (error) {
            console.error('Иосиф Виссарионович, произошла ЧУДОВИЩНАЯ ошибка!!!:', error)
            set({isSending: false})
            return false
        }}
        return false
    },

    resetSendStatus: () => {
        set({isPostSend: false})
    },

    setInputPost: (e: React.ChangeEvent<HTMLInputElement>) => {
        const postText = e.target.value
        set({contentText: postText, inputPost: postText})
        
        // setTimeout(() => {
        //     console.log(postText)
        // }, 4000);
        
    },


    uploadAndProceedPicture: async(blob, bucket, extension, scenario) => {
        const {sendPost} = get()
        if (blob !== null) {
            try {
                const mime = extension === 'jpg' ? 'image/jpeg' : 'image/png'
                const blobName = `${crypto.randomUUID()}.${extension}`
                const blobUrl = `${bucket}/${blobName}`
                const response = await fetch(blobUrl, {
                    method: 'POST',
                    headers: {
                        'apikey': 'sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y',
                        'Authorization': 'Bearer sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y',
                        'Content-Type': mime,
                    },
                    body: blob
                })
                if (!response.ok) {
                    throw new Error(`Ошибка загрузки изображения: ${response.status}`)
                }
                if (response.ok) {
                    if (scenario === 'userpic') {
                        set({userPic: blobUrl})
                        return true
                    }
                    if (scenario === 'graffity') {
                        set({contentPicture: blobUrl})
                        const isPostCreated = await sendPost()
                        return isPostCreated
                    }
                     
                } 
                    
            } catch (error) {
                console.error('Ошибка в uploadAndProceedPicture:', error)
                return false;   
            }
        }
        return false
    }
}))