import { create } from 'zustand'

interface StoreState {
    counter: number
    increase: (by: number) => void
    decrease: (by: number) => void
}


//============================

export const useStore = create<StoreState>()((set) => ({
    counter: 0,
    increase: (by) => set((state) => ({ counter: state.counter + by })),
    decrease: (by) => set((state) => ({ counter: state.counter - by })),
}))


interface StoreGState {
    theme: boolean
    changeTheme: () => void
}

export const useGStore = create<StoreGState>()((set) => ({
    theme: false,
    changeTheme: () => set((state) => ({ theme: !state.theme }))
}))



