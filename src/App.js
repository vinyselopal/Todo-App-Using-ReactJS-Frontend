import AddTodo from './components/AddTodo'
import List from './components/List'
import { useEffect, useState } from 'react'
import './style/variables.css'
import './style/style.css'
import Footer from './components/Footer'
import { getAllTodos, insertTodo, updateTodo, deleteTodo, deleteAll, deleteDone } from './DB.js'
function App () {
  const [todos, updateTodos] = useState([])

  useEffect(() => {
    (async function () {
      const fetchedTodos = await getAllTodos()
      const parsedTodos = fetchedTodos.map(todo => ({ ...todo, done: JSON.parse(todo.done), expanded: false }))
      updateTodos(parsedTodos)
    })()
  }, [])
  return (
    <div className='App'>
      <header>
        <h1>ReDo</h1>
      </header>
      <AddTodo updateTodos={updateTodos} todos={todos} insertTodo={insertTodo} />
      <List todos={todos} updateTodo={updateTodo} updateTodos={updateTodos} />
      <Footer updateTodos={updateTodos} todos={todos} />
    </div>
  )
}

export default App
