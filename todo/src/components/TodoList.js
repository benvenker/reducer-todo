import React, { useReducer } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";

const TodoList = todos => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state, dispatch);
  return (
    <ul>
      {state.map(todo => (
        <li>{todo.item}</li>
      ))}
    </ul>
  );
};

export default TodoList;
