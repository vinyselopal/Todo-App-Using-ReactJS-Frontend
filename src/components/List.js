import { useEffect, useState } from 'react'
import Todo from './Todo'

function List ({ todos, updateTodos }) {
  return (
    <ul className='List'>
      {todos.map((todo, id) =>
        <Todo
          todo={todo}
          key={id}
          todos={todos}
          updateTodos={updateTodos}
        />
      )}
    </ul>
  )
}

export default List
