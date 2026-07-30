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
    sendPost: () => Promise<void>
    inputPost: (e: React.ChangeEvent<HTMLInputElement>) => void
    isSending: boolean,
    userName: string | null,
    userPic: null | string,
    contentText: string | null
    contentPicture: string | null
    postIsEmpty: boolean
    isTyping: boolean
    inputState: string | null
    authorization: (username?: string, userpic?: string) => void,
    authCheck: () => void
    anonymous: () => void
    userIsLogged: boolean,
}

export const userPostsFetch = create<userPostsState>((set, get) => ({
    posts: null,
    isLoading: false,
    isSending: false,
    userName: "я не залогинился",
    userPic: "https://sun9-46.vkuserphoto.ru/s/v1/ig2/ujXhE-AqH4NX91xx7FKgWgJpuOvih28q-1QDO7lZL9PV1QLV_r8cRaBkt-6IyN1eEH_7WhCah_E2fcga2zeaG6WF.jpg?quality=95&as=32x33,40x41&from=bu&u=btLgeCMMxvOpDWSa8seGN6cvU620O6hB1rMCYTTNkm8&cs=40x0",
    userIsLogged: false,
    contentText: null,
    contentPicture: null,
    postIsEmpty: true,
    isTyping: false,
    inputState: null,

    
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
        const {userName, userPic, userFetch, contentText, contentPicture, inputState} = get()
        const newPost:PostToSend = {
            content: inputState, 
            username: userName, 
            userPictureSrc: userPic,
            imageContentSrc: contentPicture
        }
        const textOnly = ((contentText) && !contentPicture)
        const pictureOnly = ((!contentText) && contentPicture !== null)
        const noContent = (!contentText && !contentPicture)
        if (noContent) {
            console.log('ты ни пост не чирканул, ни мемчик не забодяжил, ни граффити не намазал, но пост пытаешься отправить, ты ок вообще?')
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
                console.log("пост отправлен, ты хоть видал чё ты там из себя выдавил? на, полюбуйся ещё раз:", result)
                set({isSending: false, inputState: ''});
                userFetch()
            }
            
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}` )
            }
            
        } catch (error) {
            console.error('Иосиф Виссарионович, произошла ЧУДОВИЩНАЯ ошибка!!!:', error)
        }}
    },

    inputPost: (e: React.ChangeEvent<HTMLInputElement>) => {
        set({isTyping: true})
        const postText = (e.currentTarget.value).trim()
        console.log(postText)
        set({contentText: postText, inputState: postText})
        // setTimeout(() => {
        //     console.log(postText)
        // }, 4000);
        
    },


}))