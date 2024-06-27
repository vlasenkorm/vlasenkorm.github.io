import { create } from 'zustand'

interface StoreState {
    counter: number
    increase: (by: number) => void
    decrease: (by: number) => void
}

interface ThemeState {
    theme: boolean 
    changeTheme: () => void
}

interface ScreenSizeType {
    width: number;
    height: number;
    isMobile: boolean,
    isSMDesctop: boolean,
    isLRDesctop: boolean,
    isTablet: boolean,
  }

  type StoreGState = ScreenSizeType & ThemeState
//============================

export const useStore = create<StoreState>()((set) => ({
    counter: 0,
    increase: (by) => set((state) => ({ counter: state.counter + by })),
    decrease: (by) => set((state) => ({ counter: state.counter - by })),
}))




export const useGStore = create<StoreGState>()((set) => ({
    theme: false,
    changeTheme: () => set((state) => ({ theme: !state.theme })),
    width: 0,
    height: 0,
    isMobile: false,
    isSMDesctop: false,
    isLRDesctop: false,
    isTablet: false
}))



