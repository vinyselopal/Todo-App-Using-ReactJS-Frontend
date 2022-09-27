import { useState } from 'react'

function AddTodo ({ updateTodos, todos, insertTodo }) {
  const [todoContent, updateTodoContent] = useState('')
  const effectOnChange = (e) => {
    updateTodoContent(e.target.value)
  }

  const effectOnKeyPress = async (e) => {
    if (e.key === 'Enter') {
      const todo = {
        content: todoContent,
        done: false,
        priority: 'none',
        notes: '',
        date: null
      }

      const key = await insertTodo(todo)
      todo.key = key

      updateTodos([...todos, todo]) // use function to update
      updateTodoContent('')
    }
  }

  return (
    <div id='addTodoBar'>
      <input id='typeTodo' value={todoContent} onChange={effectOnChange} onKeyPress={effectOnKeyPress} type='text' className='App' />
    </div>
  )
}

export default AddTodo
