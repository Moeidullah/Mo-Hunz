const ADD_TODO = 'ADD_TODO'

export const addTodo = (message) => {
    return {
          type: ADD_TODO,
          message,
          id: Math.random()
    }
}

const DEL_TODO = 'DEL_TODO'

export const delTodo = (id) => {
    return {
          type: DEL_TODO,
          id
    }
}