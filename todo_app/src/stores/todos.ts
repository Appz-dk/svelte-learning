import { writable, derived, get } from "svelte/store";
import type { Writable } from "svelte/store";

export type TodoType = {
  id: string;
  text: string;
  done: boolean;
};
export type TodosType = TodoType[];

const initialTodos: TodosType = [ 
  { id: "1", text: "walk the dog", done: false }, 
  { id: "2", text: "take out trash", done: true } 
]

// Setup store
const todos: Writable<TodosType> = writable(initialTodos)
const todoCount = derived(todos, ($todos) => $todos.length)

function addTodo(text: string) {
  const currentCount = get(todoCount)
  const newTodo = { id: String(currentCount + 1), text, done: false}
  todos.update(allTodos => [...allTodos, newTodo])
}

function updateTodos(newTodos: TodosType) {
  todos.set(newTodos)
}

export const todosStore = {
  subscribe: todos.subscribe,
  addTodo,
  updateTodos,
}