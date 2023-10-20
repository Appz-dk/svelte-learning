<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { todosStore } from "../stores/todos";
  import { derived } from "svelte/store";

  
  // Update todosStore
  const handleClearDoneTodos = () => {
    const filteredTodos = $todosStore.filter(todo => !todo.done)
    todosStore.updateTodos(filteredTodos)
  }
  const hasDoneTodos = derived(todosStore, $todosStore => $todosStore.some(todo => todo.done));

  // Event dispatcher
  const dispatch = createEventDispatcher()
  const handleClearAllTodos = () => {
    dispatch("showConfirmModal", true)
  }
</script>

<div class="action-btns">
  <button disabled={!$hasDoneTodos} on:click={handleClearDoneTodos}>Clear done todos</button>
  <button disabled={!$todosStore.length} on:click={handleClearAllTodos}>Clear All</button>
</div>

<style>
  .action-btns {
    display: flex;
    justify-content: center;
    gap: 8px
  }
</style>