<script lang="ts">
  import type { TodoType, TodosType } from "./Todos.svelte";
  import FaRegTrashAlt from 'svelte-icons/fa/FaRegTrashAlt.svelte'
  import { createEventDispatcher } from "svelte";

  export let todo: TodoType
  export let todos: TodosType

  const dispatch = createEventDispatcher()
  const onDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    dispatch("deleteTodo", updatedTodos)
  }
</script>

<div class="todo-container">
  <label class:checked={todo.done}>
    <input type="checkbox" bind:checked={todo.done} />
    {todo.text}
  </label>
  <button class="icon" on:click={() => onDeleteTodo(todo.id)}>
    <FaRegTrashAlt />
  </button>
</div>


<style>
  .todo-container {
    display: flex;
    justify-content: space-between;
    gap: 6px;
    font-size: 1.25rem;
  }

  input[type="checkbox"] {
    cursor: pointer;
    width: 1rem;
    aspect-ratio: 1;
    margin-right: 6px;
  }

  .checked {
    text-decoration: line-through;
  }

  .icon {
    all:unset;
    display: grid;
    place-items: center;
    width: 20px;
    aspect-ratio: 1;
    cursor: pointer;
  }

  .icon:hover {
    color: rgb(248, 72, 72)
  }
</style>