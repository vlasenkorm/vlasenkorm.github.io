import { MutableRefObject } from 'react'
import { create } from 'zustand'


interface GlobalState {
    theme: boolean
    changeTheme: () => void
    printContext: MutableRefObject<null> | null
    changePrintContext: (newContext: MutableRefObject<null> | null) => void
    livePage: boolean
    changeLivePage: () => void
    changeScreenSize: (newContext: ScreenSizeType) => void
}

interface ScreenSizeType {
    width: number;
    height: number;
    isMobile: boolean;
    isDesktop: boolean;
    SM: boolean;
    LM: boolean;
    SD: boolean;
    LD: boolean;
}

type StoreState = ScreenSizeType & GlobalState

//localStorage.setItem("theme", "false")
console.log('==>', localStorage.getItem("theme"))

function initTheme() {
    const theme = localStorage.getItem("theme")

    if (theme) {
        return theme === 'false' ? false : true
    } else {
        localStorage.setItem("theme", "false")
        return false
    }
}

export const useStore = create<StoreState>()((set) => ({
    theme: initTheme(),
    changeTheme: () => set((state) => ({ theme: !state.theme })),
    printContext: null,
    changePrintContext: (newContext) => set({ printContext: newContext }),
    livePage: true,
    changeLivePage: () => set((state) => ({ livePage: !state.livePage })),
    width: 0,
    height: 0,
    isMobile: false,
    isDesktop: false,
    SM: false,
    LM: false,
    SD: false,
    LD: false,
    changeScreenSize: (newContext) => set({
        width: newContext.width,
        height: newContext.height,
        isMobile: newContext.isMobile,
        isDesktop: newContext.isDesktop,
        SM: newContext.SM,
        LM: newContext.LM,
        SD: newContext.SD,
        LD: newContext.LD
    }),
}))



