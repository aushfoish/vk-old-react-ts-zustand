import { create } from "zustand";
import placeholder from "@/shared/assets/currentuser-placeholders-array/exited.png";

interface useAuthStore {
  userName: string;
  uploadedUserpic: string;
  userPic: string;
  authorization: (username?: string, userpic?: string) => void;
  setUserpic: (url: string) => void;
  authCheck: () => void;
  anonymous: () => void;
  userIsLogged: boolean;
}

export const useAuthStore = create<useAuthStore>((set) => ({
  uploadedUserpic: "",
  userName: "",
  userPic: "",
  userIsLogged: false,

  authorization: (username, userpic) => {
    set({ userName: username, userPic: userpic, userIsLogged: true });
    const userAuthorization = {
      userName: username,
      userPic: userpic,
      userIsLogged: true,
    };
    localStorage.setItem("userdata", JSON.stringify(userAuthorization));
  },

  setUserpic: (url) => {
    set({ userPic: url });
  },

  authCheck: () => {
    const savedData = localStorage.getItem("userdata");
    if (savedData) {
      const dataParse = JSON.parse(savedData);
      set({
        userName: dataParse.userName,
        userPic: dataParse.userPic,
        userIsLogged: dataParse.userIsLogged,
      });
      return true;
    }
    return false;
  },

  anonymous: () => {
    set({
      userName: "не авторизовался",
      userPic: placeholder,
      userIsLogged: false,
    });
  },
}));
