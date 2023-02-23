import {StateCreator} from "zustand";
import {Store} from "./createStore";


export interface Cat {
    cat: {
        loading: boolean;
        url?: string
    }
}

export const initCat: Cat = {
    cat: {
        loading: false,
        url: ''
    }
}

export const createCat: StateCreator<
    Store,
    [],
    [],
    Cat
> = (set) => ({
    ...initCat
})
