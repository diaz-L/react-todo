import React, { Component } from "react";
import uuid from "uuid";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        task: "Buy grocery",
        completed: true
      },
      {
        id: uuid.v4(),
        task: "Purchase movie",
        completed: false
      },
      {
        id: uuid.v4(),
        task: "Return book",
        completed: false
      }
    ]
  };

  onDelete = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  addTodo = task => {
    let todo = {
      id: uuid.v4(),
      task,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
          <SearchBar onClick={this.addTodo} />
          <TodoList todos={this.state.todos} onDelete={this.onDelete} />
        </div>
      </div>
    );
  }
}

export default App;
