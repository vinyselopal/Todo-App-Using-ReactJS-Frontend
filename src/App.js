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
      updateTodos(fetchedTodos)
      console.log('todos', todos)
      console.log('fetchedTodos', fetchedTodos)
    })()
  }, [])
  return (
    <div className='App'>
      <header>
        <h1>ReDo</h1>
      </header>
      <AddTodo updateTodos={updateTodos} todos={todos} insertTodo={insertTodo} />
      <List listItems={todos} updateTodo={updateTodo} />
      <Footer />
    </div>
  )
}

export default App
