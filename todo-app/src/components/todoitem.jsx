import React from "react";

function TodoItem({todo, index, deleteTodo}) {
    return (
        <div className="todo-item">
            <span className="todo-text">{todo}</span>
            <button className="btn btn-danger" onClick={() => deleteTodo(index)}>Delete</button>
        </div>
    )
}

export default TodoItem 