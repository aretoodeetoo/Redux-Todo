import React from 'react';
import { connect } from 'react-redux';

import { addNewTodo, toggleCompleted, deleteTodo } from '../actions';

class TodoList extends React.Component{
    state = {
        newTodo: ''
    };

    handleChanges = e => {
        this.setState({ newTodo: e.target.value });
    };

    addTodo = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo);
        this.setState({ newTodo: ''})
    };

    toggleCompleted = (e, id) => {
        e.preventDefault();
        this.props.toggleCompleted(id);
    };

    deleteTodo = (id) => {
        this.props.deleteTodo(id);
    };

    render(){
        return(
            <>
            <h2>Something To Do</h2>
            <div>
                {this.props.todos.map((todo, id) => (
                    <>
                    <p onClick={e => this.toggleCompleted(e, id)}
                    name="todo"
                    key={todo.id}>
                    {todo.value}
                    </p>

                    <button onClick={() => this.deleteTodo(todo.id)}>
                    Delete This Item
                    </button>
                    </>
                ))}
            </div>
            <input 
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChanges}
            />
            <button onClick={this.addTodo}>Add Item</button>
            </>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps,
    { addNewTodo, toggleCompleted, deleteTodo }
    )(TodoList)