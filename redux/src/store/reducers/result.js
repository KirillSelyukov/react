import * as actions from '../actions/actionTypes';
import { updateObject } from "../utility";

const initialState = { results: [] };
const reducer = (state = initialState, action) => {
    if (action.type === actions.STORE_RESULT) {
        return updateObject(state, { results: state.results.concat({ id: Math.random(), value: action.result }) });
    }
    if (action.type === actions.DELETE_RESULT) {
        return updateObject(state, { results: state.results.filter(el => el.id !== action.id) });
    }

    return state;
}

export default reducer;