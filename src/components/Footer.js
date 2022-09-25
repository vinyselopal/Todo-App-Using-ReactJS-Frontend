import { deleteAll, deleteDone } from '../DB.js'

const Footer = ({ updateTodos, todos }) => {
  async function clearAll () {
    await deleteAll()
    updateTodos([])
  }
  async function clearDone () {
    console.log('all todos', todos)
    const doneTodoKeys = todos.filter(todo => todo.done).map(todo => todo.key)
    const notDoneTodos = todos.filter(todo => !todo.done)
    console.log('notDoneTodos', notDoneTodos)
    await deleteDone(doneTodoKeys)
    updateTodos(notDoneTodos)
  }
  return (
    <div className='footer'>
      <div className='footerDiv'>
        <input type='button' className='clearAll' value='Clear All' onClick={clearAll} />
        <input type='button' className='clearDone' value='Clear Done' onClick={clearDone} />
      </div>
    </div>
  )
}

export default Footer
