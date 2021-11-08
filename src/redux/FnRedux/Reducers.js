import ActionTypes from './Action';

function Reducer(state = { vehicle: '' }, action) {
  switch (action.type) {
    case ActionTypes.car:
      return { vehicle: 'It is a Car' };
    case ActionTypes.bike:
      return { vehicle: 'It is a Bike' };
    default:
      return state;
  }
}

export default Reducer;
