import React, { Component } from "react";
import TodoList from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Jake",
      todos: [
        { id: 1, content: "Finish this todo" },
        { id: 2, content: "Get an awesome job" }
      ]
    };
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center">ToDos!</h1>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
