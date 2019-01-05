import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return (
      <div className="col-md-8 offset-md-2">
        <ul className="list-group">
          {this.props.todos.map(task => (
            <Todo key={task.id} todo={task} onDelete={this.props.onDelete} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
