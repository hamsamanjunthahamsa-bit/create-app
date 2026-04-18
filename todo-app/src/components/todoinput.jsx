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
        <div>
            <input 
                type="text" 
                placeholder="Add a todo" 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={handleChange}>Add</button> 
        </div>
    )
}

export default TodoInput    