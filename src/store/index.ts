import { MutableRefObject } from 'react'
import { create } from 'zustand'

interface StoreState {
    counter: number
    increase: (by: number) => void
    decrease: (by: number) => void
}

interface GlobalState {
    theme: boolean 
    changeTheme: () => void
    printContext:  MutableRefObject<null> | null 
    changePrintContext:(newContext: MutableRefObject<null> | null) => void
    changeScreenSize: (newContext: ScreenSizeType) => void
}

interface ScreenSizeType {
    width: number;
    height: number;
    isMobile: boolean,
    isSMDesktop: boolean,
    isLRDesktop: boolean,
    isTablet: boolean,
  }

  type StoreGState = ScreenSizeType & GlobalState
//============================

export const useStore = create<StoreState>()((set) => ({
    counter: 0,
    increase: (by) => set((state) => ({ counter: state.counter + by })),
    decrease: (by) => set((state) => ({ counter: state.counter - by })),
}))




export const useGStore = create<StoreGState>()((set) => ({
    theme: false,
    changeTheme: () => set((state) => ({ theme: !state.theme })),
    printContext: null,
    changePrintContext: (newContext) => set({printContext: newContext }),
    width: 0,
    height: 0,
    isMobile: false,
    isSMDesktop: false,
    isLRDesktop: false,
    isTablet: false,
    changeScreenSize: (newContext) => set({
        width: newContext.width,
        height: newContext.height,
        isMobile: newContext.isMobile,
        isSMDesktop: newContext.isSMDesktop,
        isLRDesktop: newContext.isLRDesktop,
        isTablet: newContext.isTablet, 
    }),
}))



