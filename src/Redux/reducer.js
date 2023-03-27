import React from 'react'
import { PRELOADER_TOGGLE } from './actiontype'

const initialstate = {
    togglepreloader: true
}

export default function reducer(state = initialstate, { type, payload }) {
    switch (type) {
        case PRELOADER_TOGGLE:
            return {
                togglepreloader: payload
            }

        default:
            return state;
    }
}
