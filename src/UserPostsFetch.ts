import { create } from "zustand";

interface UserPosts {
    id: number,
    content: string,
    date: string,
    username: string,
    userlastname: string,
    userPictureSrc: string,
    imageContentSrc: string
}

interface userPostsState {
    posts: UserPosts[] | null,
    isLoading: boolean,
    currentUser: string | null,
    userFetch: () => Promise<void>
    postsConsoleLog: (posts: UserPosts) => void
}

export const userPostsFetch = create<userPostsState>((set, get) => ({
    posts: null,
    isLoading: false,
    currentUser: null,

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
    }
}))