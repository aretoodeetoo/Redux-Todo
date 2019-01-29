import { ADD_NEW_ITEM, TOGGLE_COMPLETED, DELETE_ITEM } from '../actions';

const initialState = {
    todos: []
};

const reducer = (state = initialState, action) => {
    console.log('reducer', action);
    switch (action.type){
        case ADD_NEW_ITEM:
        const newTodo = {
            value: action.payload,
            completed: false
        };
        return {
            ...state,
            todos: [...state.todos, newTodo]
        };
        case TOGGLE_COMPLETED:
        return {
            ...state,
            todos: state.todos.map((todo, index) => 
            action.payload === index
            ? {...todo, completed: !todo.completed }
            : todo
            )
        }
        case DELETE_ITEM:
        return {todos: state.todos.filter(todo => todo.index !== action.index)}

        default:
        return state;
    }
}

export default reducer;