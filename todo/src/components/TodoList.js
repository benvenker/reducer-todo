import React, { useState, useReducer } from "react";

const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <li key={todo.id}>{todo.item}</li>
      ))}
    </ul>
  );
};

export default TodoList;
