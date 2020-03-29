import React, { useEffect, useReducer, useState } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  // console.log(state);
  const [todos, setTodos] = useState(initialState);

  return (
    <div>
      <form>
        <label htmlFor="todo">
          Add Todo <input className="input-todo" type="text" />
        </label>
        <button
          onClick={e => {
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
          }}
        >
          Add Todo
        </button>
      </form>
      <ul>
        {state.map(todo => (
          <li
            onClick={() => {
              dispatch({
                type: "TOGGLE_TODO",
                payload: todo
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
