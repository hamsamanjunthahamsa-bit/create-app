import React from "react";
import TodoItem from "./todoitem";

function TodoList({todos, deleteTodo}) {
    if (todos.length === 0) {
        return <div className="empty-state">No todos yet. Add one above!</div>
    }

    return (
        <div className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
            ))}
        </div>
    )
}

export default TodoList 