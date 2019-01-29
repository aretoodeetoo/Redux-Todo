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
    };

    toggleCompleted = (e, index) => {
        e.preventDefault();
        this.props.toggleCompleted(index);
    };

    deleteTodo = (e, index) => {
        e.preventDefault();
        this.props.deleteTodo(index);
    };

    render(){
        return(
            <>
            <h2>Something To Do</h2>
            <div>
                {this.props.todos.map((todo, index) => (
                    <>
                    <p onClick={e => this.toggleCompleted(e, index)} key={index}>{todo.value}</p>
                    <button onClick={e => this.deleteTodo(e, index)}>Delete This Item</button>
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