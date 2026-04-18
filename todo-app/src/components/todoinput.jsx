import { useState } from "react"

function TodoInput({addTodo}) {
    const [todo, setTodo] = useState("")  
    const handleChange = () => {
       if(todo.trim() !== "") {
        addTodo(todo)
        setTodo("")
       }    
    }  
    return (
        <div className="input-container">
            <input 
                className="todo-input"
                type="text" 
                placeholder="What needs to be done?" 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleChange()}
            />
            <button className="btn btn-primary" onClick={handleChange}>Add</button> 
        </div>
    )
}

export default TodoInput    