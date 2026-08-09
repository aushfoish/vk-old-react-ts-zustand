import { create } from "zustand";

import { createUserSlice } from "../../entities/user";
import { createPostSlice } from "../../entities/post/model/postSlice";
import { type UserSlice } from "../../entities/user";
import { type PostSlice } from "../../entities/post/model/postSlice";

export type RootStoreState = UserSlice & PostSlice

export const useAppStore = create<RootStoreState>()((...a) => ({
    ...createUserSlice(...a),
    ...createPostSlice(...a)
}))