import { useEffect, useState } from 'react'
import Todo from './Todo'

function List ({ todos, updateTodos }) {
  return (
    <ul className='List'>
      {todos.map((todo, id) =>
        <Todo
          todo={todo}
          key={id}
          // key={todo.key}
          todos={todos}
          updateTodos={updateTodos}
        /> // try counter with closure, for id
      )}
    </ul>
  )
}

export default List
