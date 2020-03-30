import React, { useEffect, useReducer, useState } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

const TodoForm = () => {
  console.log("rendered");
  const [state, dispatch] = useReducer(todoReducer, initialState);
  // console.log(state);
  const [todos, setTodos] = useState(initialState);

  const handleSubmit = e => {
    e.preventDefault();
    const todo = {
      item: document.querySelector(".input-todo").value,
      completed: false,
      id: new Date().getTime()
    };
    setTodos([...state, todo]);
    dispatch({
      type: "ADD_TODO",
      payload: todo
    });
  };

  const handleToggle = e => {
    console.log("clicked");
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    dispatch({
      type: "TOGGLE_TODO",
      payload: todos[0]
    });
  };
  return (
    <div>
      <form>
        <label htmlFor="todo">
          Add Todo <input className="input-todo" type="text" />
        </label>
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
      <ul>
        {state.map(todo => (
          <li onClick={handleToggle} key={todo.id}>
            {todo.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;
