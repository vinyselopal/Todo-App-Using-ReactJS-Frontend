import { useState } from 'react' // divide into components
import { updateTodo, deleteTodo } from '../DB.js'

function Todo ({ todo, updateTodos, todos }) {
  const [expanded, updateExpanded] = useState(false)

  function deleteTodoInList () {
    const newTodos = todos.filter(a => a.key !== todo.key)
    updateTodos(newTodos)
  }

  console.log(todo)

  return (
    <li>
      <div>key: {todo.key}</div>
      <div>content: {todo.content}</div>
      <div>done: {String(todo.done)}</div>
      <div className='visible'>
        <p className='savedTask'>
          <input
            className='todoContentBar'
            spellCheck='false'
            value={todo.content}
            onChange={(e) => {
              updateTodo(todo.key, 'content', e.target.value)
              // todo.content = e.target.value
              const newTodo = { ...todo, content: e.target.value }
              const slicedTodos = todos.filter(a => a.key !== todo.key)
              const newTodos = [...slicedTodos, newTodo].sort((a, b) => a - b)
              updateTodos(newTodos)
            }}
          />
        </p>
        <input
          type='checkbox'
          className='strike'
          checked={todo.done}
          onChange={(e) => {
            updateTodo(todo.key, 'done', e.target.checked)
            const newTodo = { ...todo, done: e.target.checked }
            const slicedTodos = todos.filter(a => a.key !== todo.key)
            const newTodos = [...slicedTodos, newTodo].sort((a, b) => a.key - b.key) // name key as id
            updateTodos(newTodos)
          }}
        />
        <input
          type='button'
          className='expandTodoButton'
          onClick={() => {
            updateExpanded((expanded) => !expanded)
          }}
          value='v'
        />
      </div>
      <div className='hidden' style={{ display: expanded ? 'flex' : 'none' }}>
        <div className='leftHidden'>
          <textarea
            className='notes' value={todo.notes} onChange={(e) => {
              updateTodo(todo.key, 'notes', e.target.value)
              const newTodo = { ...todo, content: e.target.value }
              const slicedTodos = todos.filter(a => a.key !== todo.key)
              const newTodos = [...slicedTodos, newTodo].sort((a, b) => a - b)
              updateTodos(newTodos)
            }}
          />
        </div>
        <div className='rightHidden'>
          <input
            type='date' className='date' value={todo.date} onChange={(e) => {
              updateTodo(todo.key, 'date', e.target.value)
              const newTodo = { ...todo, content: e.target.value }
              const slicedTodos = todos.filter(a => a.key !== todo.key)
              const newTodos = [...slicedTodos, newTodo].sort((a, b) => a - b)
              updateTodos(newTodos)
            }}
          />
          <select
            className='priority' value={todo.priority} onChange={(e) => {
              updateTodo(todo.key, 'priority', e.target.value)
              const newTodo = { ...todo, content: e.target.value }
              const slicedTodos = todos.filter(a => a.key !== todo.key)
              const newTodos = [...slicedTodos, newTodo].sort((a, b) => a - b)
              updateTodos(newTodos)
            }}
          >
            <option value='none'>none</option>
            <option value='low'>low</option>
            <option value='medium'>medium</option>
            <option value='high'>high</option>
          </select>
          <input
            type='button' value='delete' className='delete' onClick={(e) => {
              deleteTodo(todo.key)
              deleteTodoInList()
            }}
          />
        </div>
      </div>

    </li>
  )
}

export default Todo
