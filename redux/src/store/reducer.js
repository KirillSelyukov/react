import * as actions from './actions';

const initialState = { counter: 0, results: [] };
const reducer = (state = initialState, action) => {
    if (action.type === actions.INCREMENT) {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === actions.DECREMENT) {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === actions.ADD) {
        return {
            ...state,
            counter: state.counter + action.val
        }
    }
    if (action.type === actions.SUBTRACT) {
        return {
            ...state,
            counter: state.counter - action.val
        }
    }
    if (action.type === actions.STORE_RESULT) {

        return {
            ...state,
            results: state.results.concat({ id: Math.random(), value: state.counter })
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