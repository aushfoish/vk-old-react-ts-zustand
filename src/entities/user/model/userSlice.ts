import { type StateCreator } from 'zustand';

export interface UserSlice {
  userName: string;
  userPic: string;
  userIsLogged: boolean;
  authorization: (username: string, userpic: string) => void;
  authCheck: () => void;
  anonymous: () => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  userName: 'Я не залогинился',
  userPic: '',
  userIsLogged: false,

  authorization: (username, userpic) => {
            set({
                userName:username, 
                userPic:userpic, 
                userIsLogged: true
            })
            const userAuthorization = {'userName': username, "userPic": userpic, "userIsLogged": true}
            localStorage.setItem('userdata', JSON.stringify(userAuthorization))
    },

    authCheck: () => {
        const savedData = localStorage.getItem('userdata')
        if (savedData) {
            const dataParse = JSON.parse(savedData)
            set({
                userName: dataParse.userName, 
                userPic: dataParse.userPic, 
                userIsLogged: dataParse.userIsLogged
            })
        }
    },
    
    anonymous: () => {
        set({
            userName: "я не залогинился", 
            userPic: "https://sun9-46.vkuserphoto.ru/s/v1/ig2/ujXhE-AqH4NX91xx7FKgWgJpuOvih28q-1QDO7lZL9PV1QLV_r8cRaBkt-6IyN1eEH_7WhCah_E2fcga2zeaG6WF.jpg?quality=95&as=32x33,40x41&from=bu&u=btLgeCMMxvOpDWSa8seGN6cvU620O6hB1rMCYTTNkm8&cs=40x0", 
            userIsLogged: false
        })
    },
});