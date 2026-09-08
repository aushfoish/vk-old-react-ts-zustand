import { useAuthStore } from "@/entities/user/model/useAuthStore";
import { create } from "zustand";
import { supabaseFetch } from "@/shared/api";

export interface UserPosts {
  id: number;
  content: string;
  date: string;
  username: string;
  userPictureSrc: string;
  imageContentSrc: string;
}

interface PostToSend {
  content: string;
  username: string;
  userPictureSrc: string;
  imageContentSrc: string;
}

interface WallStore {
  isLoading: boolean;
  sendPost: () => Promise<boolean>;
  setInputPost: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSending: boolean;
  isPostSend: boolean;
  contentText: string;
  contentPicture: string;
  postIsEmpty: boolean;
  isTyping: boolean;
  inputPost: string;
  resetSendStatus: () => void;
}

export const useWallStore = create<WallStore>((set, get) => ({
  isLoading: false,
  isSending: false,
  isPostSend: false,
  contentText: "",
  contentPicture: "",
  postIsEmpty: true,
  isTyping: false,
  inputPost: "",

  sendPost: async () => {
    const { contentPicture, inputPost } = get();
    const userName = useAuthStore.getState().userName;
    const userPic = useAuthStore.getState().userPic;
    const newPost: PostToSend = {
      content: inputPost,
      username: userName,
      userPictureSrc: userPic,
      imageContentSrc: contentPicture,
    };
    const textOnly = inputPost !== "" && !contentPicture;
    const pictureOnly = !inputPost && contentPicture !== "";
    const noContent = !inputPost.trim() && contentPicture === "";
    if (noContent) {
      alert(
        "ты ни пост не чирканул, ни мемчик не забодяжил, ни граффити не намазал, но пост пытаешься отправить, ты ок вообще?",
      );
      return false;
    }
    if (textOnly || pictureOnly) {
      try {
        set({ isSending: true });
        const response = await supabaseFetch(
          "https://tyekwqioulapfagzpswr.supabase.co/rest/v1/posts",
          {
            method: "POST",
            headers: {
              Prefer: "return=representation",
            },
            body: JSON.stringify(newPost),
          },
        );
        if (response.ok) {
          const result = await response.json();
          set({
            isSending: false,
            isPostSend: true,
            inputPost: "",
            contentPicture: "",
          });
          console.log("пост отправлен:", result);
          return true;
        }

        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
      } catch (error) {
        console.error(
          error instanceof Error
            ? error.message
            : "Иосиф Виссарионович, произошла ЧУДОВИЩНАЯ ошибка!!!",
          error,
        );
        set({ isSending: false });
        return false;
      }
    }
    return false;
  },

  resetSendStatus: () => {
    set({ isPostSend: false });
  },

  setInputPost: (e: React.ChangeEvent<HTMLInputElement>) => {
    const postText = e.target.value;
    set({ contentText: postText, inputPost: postText });
  },
}));
