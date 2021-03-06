// todos
export function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.payload]);
    default:
      return state;
  }
}

// counter
export function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
