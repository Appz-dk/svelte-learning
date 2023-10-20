<script lang="ts">
  import type { TodoType } from "./Todos.svelte";

  export let todo: TodoType
</script>

<div class="todo-container">
  <label class:checked={todo.done}>
    <input type="checkbox" bind:checked={todo.done} />
    {todo.text}
  </label>
</div>


<style>
  .todo-container {
    display: flex;
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

</style>