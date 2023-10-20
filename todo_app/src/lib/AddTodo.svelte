<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { TodosType } from "./Todos.svelte";

  // Variables needed
  export let todos: TodosType
  let todoText = ""

  // Setup dispatch to listen to events
  const dispatch = createEventDispatcher();

  const handleAddTodo = () => {
    if (!todoText) return
    const newTodo = { id: String(todos.length + 1), text: todoText, done: false };
    // Dispatch a new custom event of addTodo
    dispatch('addTodo', newTodo);
  }

</script>


<div class="add-todo">
  <input bind:value={todoText}/>
  <button on:click={handleAddTodo}>Add Todo</button>
</div>

<style>

  .add-todo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .add-todo button {
    border-radius: 4px;
    border: 1px solid transparent;
    padding: .25rem .5rem;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }

  .add-todo button:hover {
    border-color: #646cff;
  }

  .add-todo input {
    padding: .25rem .5rem;
  }

</style>