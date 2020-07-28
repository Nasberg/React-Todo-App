import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    return (
      <>
        {this.props.todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onCheckbox={this.props.onCheckbox}
            onDelete={this.props.onDelete}
          />
        ))}
      </>
    );
  }
}

export default TodoList;
