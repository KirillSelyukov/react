import * as actions from '../actions/actions';

const initialState = { results: [] };

const reducer = (state = initialState, action) => {

    if (action.type === actions.STORE_RESULT) {

        return {
            ...state,
            results: state.results.concat({ id: Math.random(), value: action.result })
        };
    }
    if (action.type === actions.DELETE_RESULT) {
        console.log('In DELETE_RESULT')

        // const newResults = [...state.results];
        // newResults.splice(id,1);

        const newResult = state.results.filter(el => el.id !== action.id);
        return {
            ...state,
            results: newResult
        };
    }

    return state;
}

export default reducer;