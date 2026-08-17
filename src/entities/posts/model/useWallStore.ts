import { useAuthStore } from "@/entities/user/model/useAuthStore";
import { create } from "zustand";

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
  posts: UserPosts[] | [];
  isLoading: boolean;
  pagePostsFetch: () => Promise<void>;
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
  updatedPosts: (newPost: UserPosts) => void;
  filterUpdatedPosts: (oldPost: number) => void;
}

export const useWallStore = create<WallStore>((set, get) => ({
  posts: [],
  isLoading: false,
  isSending: false,
  isPostSend: false,
  contentText: "",
  contentPicture: "",
  postIsEmpty: true,
  isTyping: false,
  inputPost: "",

  pagePostsFetch: async () => {
    try {
      set({ isLoading: true });
      const response = await fetch(
        "https://tyekwqioulapfagzpswr.supabase.co/rest/v1/posts?order=date.desc",
        {
          method: "GET",
          headers: {
            apikey: "sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y",
            Authorization:
              "Bearer sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y",
            "Content-Type": "application/json",
          },
        },
      );
      if (response.ok !== true) {
        throw new Error("Ошибка: не удалось получить данные о постах");
      }
      const data = await response.json();
      set({ posts: data, isLoading: false });
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      set({ posts: [], isLoading: false });
    }
  },

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
        const response = await fetch(
          "https://tyekwqioulapfagzpswr.supabase.co/rest/v1/posts",
          {
            method: "POST",
            headers: {
              apikey: "sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y",
              Authorization:
                "Bearer sb_publishable_eBXbMbfxyIM6KTA3AP0oaQ_QKJT8Y-y",
              "Content-Type": "application/json",
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
          "Иосиф Виссарионович, произошла ЧУДОВИЩНАЯ ошибка!!!:",
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

  updatedPosts: (newPost) =>
    set((state) => ({
      posts: [newPost, ...state.posts],
    })),

  filterUpdatedPosts: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    })),
}));
