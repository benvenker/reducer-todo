import React, { useEffect, useReducer, useState } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
// import "../index.css";

const TodoForm = () => {
  console.log("rendered");
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = e => {
    e.preventDefault();
    const todo = {
      item: document.querySelector(".input-todo").value,
      completed: false,
      id: new Date().getTime()
    };
    // setTodos([...state, todo]);
    dispatch({
      type: "ADD_TODO",
      payload: todo
    });
  };

  const clearItems = e => {
    e.preventDefault();
    dispatch({
      type: "CLEAR_COMPLETED"
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="todo">
          Add Todo <input className="input-todo" type="text" />
        </label>
        <button onClick={handleSubmit}>Add Todo</button>
        <button onClick={clearItems}>Clear Completed</button>
      </form>
      <ul>
        {state.map(todo => (
          <li
            className={todo.completed === true ? "completed" : null}
            onClick={e => {
              console.log("clicked");
              e.nativeEvent.stopImmediatePropagation();
              dispatch({
                type: "TOGGLE_TODO",
                payload: todo.id
              });
            }}
            key={todo.id}
          >
            {todo.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;
