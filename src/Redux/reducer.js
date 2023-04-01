import React from 'react'
import { NAVBAR_BACKGROUND_BG, PRELOADER_TOGGLE } from './actiontype'

const initialstate = {
    togglepreloader: true,
    navbarBg: false
}

export default function reducer(state = initialstate, { type, payload }) {
    switch (type) {
        case PRELOADER_TOGGLE:
            return {
                ...state,
                togglepreloader: payload
            }

        case NAVBAR_BACKGROUND_BG:
            return {
                ...state,
                navbarBg: payload
            }

        default:
            return state;
    }
}
