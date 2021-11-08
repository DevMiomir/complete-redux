const initalState = {
  count: 0,
};

export default function Reducer(state = initalState, action) {
  console.log(action);
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload };
    case 'DECREMENT':
      return { count: state.count - action.payload };
    default:
      return state;
  }
}
