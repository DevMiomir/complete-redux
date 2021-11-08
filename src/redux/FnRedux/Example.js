import { useSelector, useDispatch } from 'react-redux';

export default function Example() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: 'CAR' })}>Car</button>
      <h1>{counter.vehicle}</h1>
      <button onClick={() => dispatch({ type: 'BIKE' })}>Bike</button>
    </div>
  );
}
