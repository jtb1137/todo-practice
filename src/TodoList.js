import React, { Component } from "react";

const TodoList = props => {
  return (
    <div>
      <ul>
        {props.todos.map(todo => {
          return <li key={todo.id}>{todo.content}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
