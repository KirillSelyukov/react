import * as actions from './actions';

const initialState = { persons: [] };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD: {
            const newPerson = {
                id: Math.random(),
                name: 'Max',
                age: Math.floor(Math.random() * 40)
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }
        }
        case actions.DELETE: {
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.id)
            }
        }
        default:
            return state;
    }
}

export default reducer;