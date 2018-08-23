import { INCREMENT, DECREMENT, RESET,INCREMENT_BY_INPUT } from './00-Constants.js'


export const addOneToCount = () => {
    return { type: INCREMENT }
}

export const minusOneToCount = () => {
    return { type: DECREMENT }
}

export const resetCount = () => {
    return { type: RESET }
}


export const addByInput = (payload = {}) => {
    console.log("The Payload: ", payload)
    return { 
        type: INCREMENT_BY_INPUT ,
        incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 0
    }
}

