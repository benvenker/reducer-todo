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
            dispatch({
              type: "ADD_TODO",
              payload: document.querySelector(".input-todo").value
            });
            setTodos([...todos], document.querySelector(".input-todo").value);
          }}
        >
          Add Todo
        </button>
      </form>
      <ul>
        {state.map(todo => (
          <li
            onClick={e => {
              e.preventDefault();
              dispatch({
                type: "TOGGLE_TODO",
                payload: {
                  item: todo.item,
                  completed: !todo.completed,
                  id: todo.id
                }
              });
              console.log("toggled completed: ", !todo.completed);
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
