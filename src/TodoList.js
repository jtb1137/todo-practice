import React from "react";

const TodoList = props => {
  const allTodos = props.todos;
  const fullList = allTodos.length ? (
    allTodos.map(todo => {
      return <li key={todo.id}>{todo.content}</li>;
    })
  ) : (
    <li>No tasks to do!</li>
  );

  return (
    <div>
      <ul>{fullList}</ul>
    </div>
  );
};

export default TodoList;
