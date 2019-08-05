import React from 'react';

const TodoListItem = (props)=>{
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">
            <input type = "checkbox" 
            checked={props.item.completed} 
            onChange={() => props.change(props.item.id)}
            />
            <span style={props.item.completed ? completedStyle: null}>{props.item.text}</span>
            <br/>
        </div>
    )
}
export default TodoListItem;