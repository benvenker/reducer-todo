export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 1234
  },
  {
    item: "Something about reducers",
    completed: false,
    id: 3892984337589
  },
  {
    item: "More about reducers",
    completed: false,
    id: 3892987589
  }
];

export const todoReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    // case "ADD_TODO":
    //   const todo = {
    //     item: action.payload,
    //     completed: false,
    //     id: new Date().getTime()
    //   };
    //   console.log("todo added: ", todo);
    //   return [todo, ...state];
    case "TOGGLE_TODO":
      console.log("action id: ", action.payload.id);
      const index = state.findIndex(el => el.id === action.payload.id);
      const editable = { ...state[index] };
      editable.completed = !editable.completed;
      state.splice(index, 1, editable);
      return [...state];
    default:
      return state;
  }
};
