import * as actions from './actionTypes'

export const increment = () => {
    return {
        type: actions.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actions.DECREMENT
    }
}

export const add = (val) => {
    return {
        type: actions.ADD,
        val
    }
}

export const subtract = (val) => {
    return {
        type: actions.SUBTRACT,
        val
    }
}
