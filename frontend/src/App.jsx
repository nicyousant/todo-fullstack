import { useEffect, useState, useRef } from "react"

// CRUD

// Create - POST
// Read - GET
// Update - PUT/PATCH
// Delete - DELETE

function App() {

  const [todos, setTodos] = useState([])
  const inputRef = useRef(null)

  useEffect(() => {
    async function getTodos() {
      const response = await fetch('http://localhost:8080/todos')
      const data = await response.json()
      console.log(data)
      setTodos(data)
    }
    getTodos()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    console.log('handleSubmit')

    const todo = {
      text: inputRef.current.value
    }

    try {
        const response = await fetch('http://localhost:8080/todos', { 
          method: "POST",
          body: JSON.stringify(todo),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      const newTodo = await response.json()

      console.log(newTodo)

      setTodos([...todos, newTodo])

    } catch(e) {
      console.log(e)
    }
  
  }

  async function handleDelete(id) {
    console.log('handleDelete')
    try {
          const response = await fetch(`http://localhost:8080/todos/${id}`)
    const result = await response.json()
    console.log(result)
     console.log(id)
    } catch(e) {
      console.log(e)
  }
  }

  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input 
          ref={inputRef}
          required={true} 
        />
        <button>Submit</button>
      </form>
      <ul>
        {/* in React, map turns array of objects into elements */}
        {todos.map((todo) => 
          <li key={todo._id}>
            <input 
              type="checkbox" 
              checked={todo.completed}
              onChange={() => {}}
            />
            {todo.text}
            <button onClick={() => handleDelete(todo._id)}>X</button>
          </li>
        ) }
      </ul>
    </>
  )
}

export default App
