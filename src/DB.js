async function getAllTodos () {
  const result = await (await fetch('http://localhost:8000', {
    method: 'GET'
  })).json()
  return result
}
async function insertTodo (todo) {
  const result = await (await fetch('http://localhost:8000', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'content-type': 'application/json'
    }
  })).json()
  return result.id
}
async function updateTodo (key, field, value) {
  const filter = {}
  filter[field] = value
  const result = await (await fetch(`http://localhost:8000/${key}`, {
    method: 'PUT',
    body: JSON.stringify(filter),
    headers: {
      'content-type': 'application/json'
    }
  })).json()
  return result
}
async function deleteTodo (key) {
  const result = await (await fetch(`http://localhost:8000/${key}`, {
    method: 'DELETE'
  })).json()
  return result
}
async function deleteAll () {
  const result = await (await fetch('http://localhost:8000/', {
    method: 'DELETE'
  })).json()
  return result
}
async function deleteDone (keys) {
  const result = await (await fetch('http://localhost:8000/done', {
    method: 'DELETE',
    body: JSON.stringify({ keys }),
    headers: {
      'content-type': 'application/json'
    }
  })).json()
  return result
}

export { getAllTodos, insertTodo, updateTodo, deleteTodo, deleteAll, deleteDone }
