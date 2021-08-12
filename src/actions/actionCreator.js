const ADD_TODO = 'ADD_TODO'

const addTodo = (message) => {
    return {
          type: ADD_TODO,
          message: message,
          id: Math.random()
    }
}

const DEL_TODO = 'DEL_TODO'

const delTodo = (id) => {
    return {
          type: DEL_TODO,
          id
    }
}