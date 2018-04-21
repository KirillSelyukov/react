import * as actions from './actions';

const initialState = { persons: [] };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD: {
            const newPerson = {
                id: Math.random(),
                name: action.personData.name,
                age: action.personData.age
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