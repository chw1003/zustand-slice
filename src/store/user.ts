import {StateCreator} from 'zustand'
import {Store} from "./createStore";


// 登录用户信息
export interface User {
    userInfo: {
        userId: number | undefined;
        nickName: string;
        userName: string;
        portraitUrl?: string;
        favoriteCatCategory: number | undefined
    };
    resetUser: () => void;
}

// 用户信息初始值
export const initUser = {
    userInfo: {
        userId: undefined,
        nickName: '',
        userName: '',
        favoriteCatCategory: undefined,
    }
}
export const createUser: StateCreator<
    Store,
    [],
    [],
    User
> = (set) => ({
    ...initUser,
    resetUser: () => {
        set({...initUser});
    }
})
