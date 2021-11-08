import { useSelector, useDispatch } from 'react-redux';

export default function Combine() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Combine reducers</h1>
      <button onClick={() => dispatch({ type: 'ADD_TODO', payload: 'Add Todos' })}>Add todos</button>
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 'Add Todos' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 'Add Todos' })}>Decrement</button>
    </div>
  );
}
