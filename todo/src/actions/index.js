export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const DELETE_ITEM = 'DELETE_ITEM';

export function addNewTodo(newTodo){
    return{
        type: ADD_NEW_ITEM,
        payload: newTodo
    }
}

export function toggleCompleted(index){
    return{
        type: TOGGLE_COMPLETED,
        payload: index
    };
}

export function deleteTodo(index){
    return{
        type: DELETE_ITEM,
        payload: index
    }
}