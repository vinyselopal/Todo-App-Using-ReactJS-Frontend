import Todo from './Todo'

import { useEffect, useState } from 'react'
function List ({ listItems }) {
  return (
    <ul className='List'>
      {listItems.map((todo, i) =>
        <Todo todo={todo} key={todo.key} listItems={listItems} /> // try counter with closure, for id
      )}
    </ul>
  )
}

export default List
