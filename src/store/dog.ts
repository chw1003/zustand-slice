import {StateCreator} from "zustand";
import {Store} from "./createStore";


export interface Dog {
    dog: {
        loading: boolean;
        url?: string
    }
}

export const initDog: Dog = {
    dog: {
        loading: false,
        url: ''
    }
}

export const createDog: StateCreator<
    Store,
    [],
    [],
    Dog
> = (set) => ({
    ...initDog
})
