<script lang="ts">
  import type { TodoType } from "./Todos.svelte";
  import FaRegTrashAlt from 'svelte-icons/fa/FaRegTrashAlt.svelte'

  export let todo: TodoType
</script>

<div class="todo-container">
  <label class:checked={todo.done}>
    <input type="checkbox" bind:checked={todo.done} />
    {todo.text}
  </label>
  <div class="icon">
    <FaRegTrashAlt />
  </div>
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