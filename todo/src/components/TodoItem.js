import React from 'react';

function TodoItem(props){
    return(
        <div>
            {props.todo.value}
        </div>
    );
}

export default TodoItem;