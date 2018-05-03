import * as actions from './actionTypes';

const saveResult = (result) => {
    return {
        type: actions.STORE_RESULT,
        result
    }
}

export const storeResult = (result) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(result))
        }, 2000)
    }
}

export const deleteResult = (id) => {
    return {
        type: actions.DELETE_RESULT,
        id
    }
}