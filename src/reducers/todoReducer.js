import { FETCH_TODOS, ADD_TODO, MARK_AS_DONE } from '../actions/todo/';

const initialState = {
    all: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return Object.assign({}, state, action.payload);

        case ADD_TODO:
            return state;
        
        case MARK_AS_DONE:
            return state;

        default:
            return state;
    }
}

export default todoReducer;