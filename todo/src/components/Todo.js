import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';

const TodoList = props => {
    return (
        <div>
        <h1>Hello, World!</h1>
        {props.todos.map(todo => {
            return <TodoItem 
            todo={todo}
            />
        })}
        </div>
    );
}

export default TodoList;