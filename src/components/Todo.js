import { useEffect, useState } from 'react' // divide into components
import { updateTodo, deleteTodo } from '../DB.js'

function Todo ({ todo, listItems }) {
  console.log('todo todo', todo)
  const [expanded, updateExpanded] = useState(false)
  const [content, updateContent] = useState(todo.content)
  const [done, updateDone] = useState(todo.done)
  const [priority, updatePriority] = useState(todo.priority)
  const [notes, updateNotes] = useState(todo.notes)
  const [date, updateDate] = useState(todo.date)
  const [deleted, updateDeleted] = useState(0)
  console.log('todo in Todo.js', todo)

  useEffect(() => {
    (async function () {
      if (listItems.length) await updateTodo(todo.key, 'content', content)
    })()
  }, [content])
  useEffect(() => {
    (async function () {
      if (listItems.length) await updateTodo(todo.key, 'done', done)
    })()
  }, [done])
  useEffect(() => {
    (async function () {
      if (listItems.length) await updateTodo(todo.key, 'priority', priority)
    })()
  }, [priority])
  useEffect(() => {
    (async function () {
      if (listItems.length) await updateTodo(todo.key, 'notes', notes)
    })()
  }, [notes])
  useEffect(() => {
    (async function () {
      if (listItems.length) await updateTodo(todo.key, 'date', date)
    })()
  }, [date])
  useEffect(() => {
    (async function () {
      if (listItems.length) await deleteTodo(todo.key)
    })()
  }, [deleted])
  return (
    <li>
      <div className='visible'>
        <p className='savedTask'>
          <input className='todoContentBar' spellCheck='false' defaultValue={content} onChange={(e) => updateContent(e.target.value)} />
        </p>
        <input type='checkbox' className='strike' defaultChecked={JSON.parse(done)} onChange={(e) => updateDone(e.target.checked)} />
        <input
          type='button' className='expandTodoButton' onClick={() => {
            updateExpanded((expanded) => !expanded)
          }} value='v'
        />
      </div>
      <div className='hidden' style={{ display: expanded ? 'flex' : 'none' }}>
        <div className='leftHidden'>
          <textarea className='notes' defaultValue={notes} onChange={(e) => updateNotes(e.target.value)} />
        </div>
        <div className='rightHidden'>
          <input type='date' className='date' defaultValue={JSON.parse(date)} onChange={(e) => updateDate(e.target.value)} />
          <select className='priority' defaultValue={priority} onChange={(e) => updatePriority(e.target.value)}>
            <option value='none'>none</option>
            <option value='low'>low</option>
            <option value='medium'>medium</option>
            <option value='high'>high</option>
          </select>
          <input type='button' defaultValue='delete' className='delete' onClick={() => { updateDeleted((deleted) => deleted + 1) }} />
        </div>
      </div>

    </li>
  )
}

export default Todo
