import AddTodo from './components/AddTodo'
import List from './components/List'
import { useState } from 'react'
import './style/variables.css'
import './style/style.css'
import Footer from './components/Footer'

function App () {
  const [todos, updateTodos] = useState([])

  return (
    <div className='App'>
      <header>
        <h1>ReDo</h1>
      </header>
      <AddTodo updateTodos={updateTodos} todos={todos} />
      <List listItems={todos} />
      <Footer />
    </div>
  )
}

export default App
