import { useEffect, useState } from 'react'

function AddTodo ({ updateTodos, todos, insertTodo }) {
  const [todoContent, updateTodoContent] = useState('')
  const [post, updatePost] = useState(0)
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
      updateTodos([...todos, todo]) // use function to update
      updatePost((post) => post + 1)
      updateTodoContent('')
      // e.target.value = ""
    }
  }
  useEffect(() => {
    (async function () {
      if (todos.length) {
        const key = await insertTodo(todos[todos.length - 1])
        updateTodos((todos) => {
          const newTodo = todos[todos.length - 1]
          newTodo.key = key
          todos[todos.length - 1] = newTodo
          return todos
        })
      }
    })()
  }, [post])

  return (
    <div id='addTodoBar'>
      <input id='typeTodo' value={todoContent} onChange={effectOnChange} onKeyPress={effectOnKeyPress} type='text' className='App' />
    </div>
  )
}

export default AddTodo
