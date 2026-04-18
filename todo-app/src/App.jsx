import { useState } from "react"    
import Header from "./components/Header"
import TodoInput from "./components/todoinput"
import TodoList from "./components/todoList"

function App() {
    const [todos, setTodos] = useState([])

    const handleAddTodo = (newTodo) => {
        setTodos([...todos, newTodo])
    }

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index)
        setTodos(newTodos)
    }

    return (
        <div className="app-container">
            <main className="todo-card">
                <Header />
                <TodoInput addTodo={handleAddTodo}/>
                <TodoList todos={todos} deleteTodo={handleDeleteTodo}/>
            </main>
        </div>
    )
}

export default App