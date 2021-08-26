import Proxy from '../../proxies/TodoProxy';

export const FETCH_TODOS = "FETCH_TODOS";
export const ADD_TODO = "ADD_TODO";
export const MARK_AS_DONE = "MARK_AS_DONE";

const proxy = new Proxy();

export const markAsDone = () => {
    return {
        type: ADD_TODO
    }
}

export const fetchTodos = () => {
    return dispatch => {
        proxy.all().then( response => {
            dispatch({
                type: FETCH_TODOS,
                payload: {
                    all: response.results
                }
            })
        })
    }
}