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
            id: Date.now(),
            completed: false
        };
        return {
            ...state,
            todos: [...state.todos, newTodo]
        };
        case TOGGLE_COMPLETED:
        return {
            ...state,
            todos: state.todos.map((todo, id) => 
            action.payload === id
            ? {...todo, completed: !todo.completed }
            : todo
            )
        }
        case DELETE_ITEM:
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.payload)}

        default:
        return state;
    }
}

// store.subscribe(() => {
//     localStorage.setItem('newTodo', JSON.stringify(store.getState()));
// })

// const persistedState = localStorage.getItem('newTodo') ? JSON.parse(localStorage.getItem('newTodo'));

// export default persistedState;

export default reducer;