import { createStore } from "redux";

// action

const addTodoAction = {
    type: 'CREATE',
    payload: 'A new post for redux'
}

const initalState = {
    posts: []
}

// reducer

const reducer = (state = initalState, action) => {
    if(action.type === 'CREATE') {
        return state + 1
    }
    return state;
}

//  store

const Store = createStore(reducer);

export default Store;