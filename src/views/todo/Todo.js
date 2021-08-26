import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { fetchTodos, markAsDone } from './../../actions/todo/';
import { connect } from 'react-redux';

class Todo extends Component {

    componentDidMount = () => {
        this.props.fetchTodos();
    }

    render() {
        const todos = this.props.todo.all;
        return (
            <>
                <h1>Todo List</h1>
                {
                    todos.map((todo) => {
                        return <TodoItem key={todo.id} todo={todo} />
                    })
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
}

const mapDispatchToProps = () => {
    return {
        markAsDone,
        fetchTodos
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Todo)