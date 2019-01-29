import React from 'react';
import { connect } from 'react-redux';

import { addNewTodo } from '../actions';

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

    render(){
        return(
            <>
            <h2>Something To Do</h2>
            <div>
                {this.props.todos.map((todo, index) => (
                    <p>{todo.value}</p>
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
    { addNewTodo }
    )(TodoList)