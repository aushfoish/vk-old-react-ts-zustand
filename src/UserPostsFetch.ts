import { create } from "zustand";

interface UserPosts {
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
    inputPost: (e: React.InputEvent<HTMLInputElement>) => void
    isSending: boolean,
    userName: string | null,
    userPic: null | string,
    contentText: string | null
    contentPicture: string | null
    postIsEmpty: boolean
    isTyping: boolean
    inputState: string | null
}

export const userPostsFetch = create<userPostsState>((set, get) => ({
    posts: null,
    isLoading: false,
    isSending: false,
    userName: "Роман Александрович",
    userPic: "https://sun9-13.vkuserphoto.ru/s/v1/ig2/ono56hzBc6yurnXRaowVEk7j4q2KsrfLImzBg8024ugPBTeJTwTlkFQzbYUASX5C5uj7KEFyRthLBUjdAFppsyFc.jpg?quality=95&crop=150,109,357,357&as=32x32,48x48,72x72,108x108,160x160,240x240&ava=1&u=IuElQeStD_SsXfaohFE0ighha-xa26Ji4_lJ0me1iNE&cs=50x50",
    contentText: null,
    contentPicture: null,
    postIsEmpty: true,
    isTyping: false,
    inputState: null,


    userFetch: async() => {
        try {
            const {postsConsoleLog} = get()
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
            postsConsoleLog(data)
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

    inputPost: (e: React.InputEvent<HTMLInputElement>) => {
        set({isTyping: true})
        const postText = (e.currentTarget.value).trim()
        set({contentText: postText, inputState: postText})
        // setTimeout(() => {
        //     console.log(postText)
        // }, 4000);
        
    },


}))