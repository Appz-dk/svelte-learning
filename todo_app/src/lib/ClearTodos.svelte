<script lang="ts">
  import type { TodosType } from "./Todos.svelte";
  import { createEventDispatcher } from "svelte";

  // Props
  export let todos: TodosType
  // Event dispatcher
  const dispatch = createEventDispatcher()
  const handleClearDoneTodos = () => {
    const filteredTodos = todos.filter(todo => !todo.done)
    dispatch("clearDoneTodos", filteredTodos)
  }

  const handleClearAllTodos = () => {
    dispatch("showConfirmModal", true)
  }
</script>

<div class="action-btns">
  <button on:click={handleClearDoneTodos}>Clear done todos</button>
  <button on:click={handleClearAllTodos}>Clear All</button>
</div>

<style>
  .action-btns {
    display: flex;
    justify-content: center;
    gap: 8px
  }
</style>