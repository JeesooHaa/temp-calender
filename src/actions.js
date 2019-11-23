export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
import uuidV4 from 'uuid/v4'

export function addTodo (todo) {
  return {
    type: ADD_TODO,
    todo: {
      ...todo,
      id: uuidV4()
    }
  }
}

export function removeTodo (todo) {
  return {
    type: REMOVE_TODO,
    todo
  }
}