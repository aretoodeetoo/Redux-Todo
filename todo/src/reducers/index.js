import { ADD_NEW_ITEM } from '../actions';

const initialState = {
    todos: [],
    todo: {
        value: '',
        completed: false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_NEW_ITEM:
        return {
            ...state,
            todo: {}
        }
        default:
        return state;
    }


}

export default reducer;