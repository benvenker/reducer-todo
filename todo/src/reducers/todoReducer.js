export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 1
  },
  {
    item: "Something about reducers",
    completed: false,
    id: 2
  },
  {
    item: "More about reducers",
    completed: false,
    id: 3
  }
];

export const todoReducer = (state = initialState, action) => {
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
      // console.log("action id: ", action.payload.id);
      // const index = state.findIndex(el => el.id === action.payload.id);
      // const editable = { ...state[index] };
      // console.log("editable: ", editable);
      // editable.completed = !editable.completed;
      // console.log(editable);
      // state.splice(index, 1, editable);
      return [...state];
    default:
      return state;
  }
};
