export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export const todoReducer = (state, action) => {
  const todo = {
    item: action.payload,
    completed: false,
    id: new Date().getTime()
  };
  console.log(state, action);
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo];
    default:
      return state;
  }
};
