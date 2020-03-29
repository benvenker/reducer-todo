import React, { useReducer, useState } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  // console.log(state);
  const [newTodos, setNewTodos] = useState(initialState);

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
          }}
        >
          Add Todo
        </button>
      </form>
      <TodoList todos={state} />
    </div>
  );
};

export default TodoForm;
