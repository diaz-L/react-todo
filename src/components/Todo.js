import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <li className="list-group-item d-flex justify-content-between">
        {this.props.todo.task}
        <span
          className="badge badge-danger align-self-center"
          onClick={this.props.onDelete.bind(this, this.props.todo.id)}
        >
          &times;
        </span>
      </li>
    );
  }
}

export default Todo;
