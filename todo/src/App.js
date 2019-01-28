import React, { Component } from 'react';
import './App.css';

import TodoList from './components/Todo'

class App extends Component {
  state = {
    todos: []
  };

  render() {
    return (
      <div className="App">
        <TodoList todos={this.state.todos}/>
        <form>
          <input type="text"></input>
          <button onClick={() => {}}>Add a To Do Item</button>
        </form>
      </div>
    );
  }
}

export default App;
