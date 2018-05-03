import * as actions from '../actions/actionTypes';
import { updateObject } from "../utility";

const initialState = { results: [] };

const deleteResult = (state, action) => {
    const newResult = state.results.filter(el => el.id !== action.id);
    return updateObject(state, { results: newResult });
}
const storeResult = (state, action) => {
    const newResult = state.results.concat({ id: Math.random(), value: action.result });
    return updateObject(state, { results: newResult });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.STORE_RESULT: return storeResult(state, action);
        case actions.DELETE_RESULT: return deleteResult(state, action);
    }

    return state;
}

export default reducer;