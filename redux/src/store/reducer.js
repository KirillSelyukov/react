const initialState = { counter: 0, results: [] };
const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === 'ADD') {
        return {
            ...state,
            counter: state.counter + action.val
        }
    }
    if (action.type === 'SUBSTRACT') {
        return {
            ...state,
            counter: state.counter - action.val
        }
    }
    if (action.type === 'STORE_RESULT') {

        return {
            ...state,
            results: state.results.concat({ id: Math.random(), value: state.counter })
        };
    }
    if (action.type === 'DELETE_RESULT') {
        console.log('In STORE_RESULT')
        return state;
    }

    return state;
}

export default reducer;