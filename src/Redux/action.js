import { PRELOADER_TOGGLE } from "./actiontype"

export const PRELOADER_TOGGLE_FUNCTION = (payload) => {
    return {
        type: PRELOADER_TOGGLE,
        payload
    }
}