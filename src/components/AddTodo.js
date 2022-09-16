import { useState } from 'react'

function AddTodo ({ updateTodos, todos }) {
  const [todoContent, updateTodoContent] = useState('')

  const effectOnChange = (e) => {
    updateTodoContent(e.target.value)
  }

  const effectOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      const todo = {
        content: todoContent,
        done: false,
        priority: 'none',
        notes: '',
        date: null // unique key prop remaining
      }
      updateTodos([...todos, todo])
      updateTodoContent('')
      // e.target.value = ""
    }
  }

  return (
    <div id='addTodoBar'>
      <input id='typeTodo' value={todoContent} onChange={effectOnChange} onKeyPress={effectOnKeyPress} type='text' className='App' />
    </div>
  )
}

export default AddTodo
