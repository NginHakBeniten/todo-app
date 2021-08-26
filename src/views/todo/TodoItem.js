import React, {Component} from 'react'
import {ListItem, ListItemIcon, ListItemText, Checkbox} from '@material-ui/core';

export default class TodoItem extends Component {

    render() {
        const todo = this.props.todo
        return (
            <ListItem key={todo.id} dense button onClick={null}>
                <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={todo.is_completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': todo.id }}
                />
                </ListItemIcon>
                <ListItemText id={todo.id} primary={todo.description} />
          </ListItem>
        )
    }
}