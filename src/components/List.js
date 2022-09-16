import Todo from './Todo'

function List ({ listItems }) {
  return (
    <ul className='List'>
      {listItems.map((todo, i) =>
        <Todo todo={todo} key={i} />
      )}
    </ul>
  )
}

export default List
