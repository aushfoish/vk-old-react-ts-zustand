import { create } from "zustand";

interface Personal {
    id: string,
    key: string,
    value: string
}

interface Contacts {
    id: string,
    key: string,
    value: string
}

interface UserInfo {
    contacts: Contacts,
    personal_info: Personal
}

interface birthday {
    id: string,
    year: string,
    month: string,
    day: string,
}

interface languages {
    id: string,
    language: string,
}



interface user {
    id: string,
    firstname: string,
    lastname: string,
    bio: string,
    avatar: string,
    city: string,
    workplace: string,
    birthday: birthday,
    userforminfo: UserInfo,
    languages: languages[]
    
}

export interface userState {
    profile: user | null,
    isLoading: boolean,
    fetchName: () => Promise<void>
}

export const userInfoFetch = create<userState>((set) => ({
    profile: null,
    isLoading: false,

    fetchName: async() => {
        set({isLoading: true})
        const response = await fetch('http://localhost:3001/user')
        const data = await response.json()
        set({profile: data, isLoading: false})
    }

    
}))