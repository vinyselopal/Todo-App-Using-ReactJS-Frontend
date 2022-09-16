import { useState } from 'react'

function Todo ({ todo }) {
  const [expanded, updateExpanded] = useState(false)
  return (
    <li>
      <div className='visible'>
        <p className='savedTask'>
          <input className='todoContentBar' spellCheck='false' defaultValue={todo.content} />
        </p>
        <input type='checkbox' className='strike' defaultChecked={todo.done} />
        <input
          type='button' className='expandTodoButton' onClick={() => {
            updateExpanded((expanded) => !expanded)
          }} value='v'
        />
      </div>
      <div className='hidden' style={{ display: expanded ? 'flex' : 'none' }}>
        <div className='leftHidden'>
          <textarea className='notes' defaultValue={todo.notes} />
        </div>
        <div className='rightHidden'>
          <input type='date' className='date'>{todo.date}</input>
          <select className='priority' defaultValue={todo.priority}>
            <option value='none'>none</option>
            <option value='low'>low</option>
            <option value='medium'>medium</option>
            <option value='high'>high</option>
          </select>
          <input type='button' defaultValue='delete' className='delete' />
        </div>
      </div>

    </li>
  )
}

export default Todo
