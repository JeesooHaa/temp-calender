import uuidV4 from 'uuid/v4'
import { ADD_TODO, REMOVE_TODO } from '../actions'

// const initialState = {
//   todos: [{ name: 'East of Eden', author: 'John Steinbeck', id: uuidV4() }]
// }

const initialState = {
  // todos: [{ height: 50, name: "0614" }]
  items: [{ "2017-06-14": [{ height: 50, name: "0614" }]}]
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          action.todo
        ]
      }
    case REMOVE_TODO:
      const index = state.todos.findIndex(todo => todo.id === action.todo.id)
      return {
        todos: [
          ...state.todos.slice(0, index),
          ...state.todos.slice(index + 1)
        ]
      }

    default:
      return state
  }
}

export default todoReducer