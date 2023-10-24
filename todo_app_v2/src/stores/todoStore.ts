import { writable } from "svelte/store";

export type TodoType = {
  uid: string,
  text: string,
  done: boolean,
}

let uid = 0

const initialTodos = [
  { text: "Fix some bugs", done: false },
  { text: "Walk the dog", done: false },
  { text: "Learn Svelte", done: true },
  { text: "Take out the trash", done: false },
  { text: "Do the dishes", done: false },
  { text: "Write some docs", done: true },
]

const {subscribe, update} = writable(initialTodos.map(todo => {
  uid += 1
  return {...todo, uid: String(uid)}
}))

const addTodo = (text: string) => {
  uid += 1
  update( $todos => [...$todos, { uid: String(uid), text, done: false }] )
}

const checkTodo = (todo: TodoType, done: boolean) => {
  update($todos => {
    return [...$todos.filter(oldTodo => oldTodo !== todo), {...todo, done}]
  })
}

const removeTodo = (todo: TodoType) => {
  update($todos => {
    return $todos.filter(oldTodo => oldTodo !== todo)
  })
}

export const todos = {
  subscribe,
  addTodo,
  checkTodo,
  removeTodo
}
