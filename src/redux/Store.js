import { combineReducers, createStore } from 'redux';
import { todos, counter } from './CRExample/Reducer';

const reducer = combineReducers({ todos, counter });

const store = createStore(reducer);

export default store;
