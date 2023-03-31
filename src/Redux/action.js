import { NAVBAR_BACKGROUND_BG, PRELOADER_TOGGLE } from "./actiontype"

export const PRELOADER_TOGGLE_FUNCTION = (payload) => {
    return {
        type: PRELOADER_TOGGLE,
        payload
    }
}

export const NAVBAR_BACKGROUND_BG_FUNCTION = (payload) => {
    return {
        type: NAVBAR_BACKGROUND_BG,
        payload
    }
}