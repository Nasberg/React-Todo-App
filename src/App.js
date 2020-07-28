import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { v4 as uuidv4 } from "uuid";

// import components
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import ClearTodos from "./components/ClearTodos";

class App extends Component {
  state = {
    input: "",
    todos: [
      {
        id: uuidv4(),
        title: "Diska",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Tvätta",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Koda",
        completed: false,
      },
    ],
  };

  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };

  handleAddTodo = () => {
    if (this.state.input !== "") {
      const newTodo = {
        id: uuidv4(),
        title: this.state.input,
        completed: false,
      };
      this.setState({ input: "", todos: [...this.state.todos, newTodo] });
    }
  };

  handleCheckbox = (todo) => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index] = { ...todo };
    todos[index].completed = !todos[index].completed;
    this.setState({ todos });
  };

  handleDelete = (todoId) => {
    const todos = this.state.todos.filter((todo) => todo.id !== todoId);
    this.setState({ todos });
  };

  handleClear = () => {
    const todos = this.state.todos.filter((todo) => !todo.completed);
    console.log(todos);

    this.setState({ todos });
  };

  render() {
    return (
      <>
        <AddTodo
          value={this.state.input}
          todos={this.state.todos}
          onInput={this.handleInput}
          onAddTodo={this.handleAddTodo}
        />
        <TodoList
          todos={this.state.todos}
          onCheckbox={this.handleCheckbox}
          onDelete={this.handleDelete}
        />
        <ClearTodos todos={this.state.todos} onClear={this.handleClear} />
      </>
    );
  }
}

export default App;
