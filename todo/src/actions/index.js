export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';

export function addNewTodo(newTodo){
    return{
        type: ADD_NEW_ITEM,
        payload: newTodo
    }
}