const BASE_URL = 'http://localhost:8000'

async function getAllTodos () {
  const result = await (await fetch(`${BASE_URL}`, {
    method: 'GET'
  })).json()
  return result
}

async function insertTodo (todo) {
  const key = await (await fetch(`${BASE_URL}`, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'content-type': 'application/json'
    }
  })).json()

  return key
}

async function updateTodo (key, field, value) {
  const result = await (await fetch(`${BASE_URL}/${key}`, {
    method: 'PUT',
    body: JSON.stringify({ field, value }),
    headers: {
      'content-type': 'application/json'
    }
  })).json()

  return result
}
async function deleteTodo (key) {
  const result = await (await fetch(`${BASE_URL}/${key}`, {
    method: 'DELETE'
  })).json()

  return result
}
async function deleteAll () {
  const result = await (await fetch(`${BASE_URL}`, {
    method: 'DELETE'
  })).json()

  return result
}
async function deleteDone (keys) {
  await fetch(`${BASE_URL}/done`, {
    method: 'DELETE',
    body: JSON.stringify(keys),
    headers: {
      'content-type': 'application/json'
    }
  })
}

export { getAllTodos, insertTodo, updateTodo, deleteTodo, deleteAll, deleteDone }
