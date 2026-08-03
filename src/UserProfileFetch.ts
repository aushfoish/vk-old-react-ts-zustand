import { create } from "zustand";

interface Personal {
    id: number,
    key: string,
    value: string
    dataset: string
}

interface Contacts {
    id: number,
    key: string,
    value: string,
    dataset: string
}


interface birthday {
    id: number,
    day: string,
    year: string,
    month: string,
}

interface languages {
    id: string,
    language: string,
}

interface Friend {
    id: number,
    name: string,
    userpic: string,
    isOnline: boolean,
}


export interface user {
    id: number,
    firstname: string,
    lastname: string,
    bio: string,
    avatar: string,
    birthday: birthday,
    city: string,
    workplace: string,
    languages: languages[],
    contacts: Contacts[],
    personal: Personal[],
}

export interface userState {
    profile: user | null,
    friendsCount: number,
    friendsOnlineCount: number,
    friendsArray: Friend[],
    friendsOnlineArray: Friend[]
    isLoading: boolean,
    fetchName: () => Promise<void>
    fetchFriends: () => Promise<void>
    fetchFriendsOnline: () => Promise<void>
}

export const userInfoFetch = create<userState>((set) => ({
    profile: null,
    isLoading: false,
    friendsCount: 0,
    friendsArray: [],
    friendsOnlineCount: 0,
    friendsOnlineArray: [],
    

    fetchName: async() => {
        try {    
            set({isLoading: true})
            const url = 'https://tyekwqioulapfagzpswr.supabase.co/rest/v1/profile'
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'apikey': 'sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y',
                    'Authorization': 'Bearer sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y',
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok === false) {
                throw new Error('Ошибка: не удалось получить данные')
            }
            const data = await response.json()
            set({profile: data[0], isLoading: false})
            
        } catch (error) {
            console.error('Объект profile недоступен. Причина:', error);
            set({profile: null, isLoading:false})

        }
    },

    fetchFriends: async() => {
        try {
            set({isLoading: true})
            const url = 'https://tyekwqioulapfagzpswr.supabase.co/rest/v1/rpc/get_all_friends_widget'
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'apikey': 'sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y',
                    'Authorization': 'Bearer sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y',
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok) {
                throw new Error('Ошибка: не удалось получить данные')
            }
            const data = await response.json()
            set({friendsCount: data.totalCount, friendsArray: data.friends || []})
        } catch (error){
            console.error('Произошла чудовищная ошибка!!:', error)
            set({friendsCount: 0, friendsArray: []})
        }
    },

    fetchFriendsOnline: async() => {
        try {
            set({isLoading: true})
            const url = 'https://tyekwqioulapfagzpswr.supabase.co/rest/v1/rpc/get_online_friends_widget'
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'apikey': 'sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y',
                    'Authorization': 'Bearer sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y',
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok) {
                throw new Error('Ошибка: не удалось получить данные')
            }
            const data = await response.json()
            set({friendsOnlineCount: data.totalCount, friendsArray: data.friends || []})
        } catch (error){
            console.error('Произошла чудовищная ошибка!!:', error)
            set({friendsCount: 0, friendsArray: []})
        }
    },
    

}))