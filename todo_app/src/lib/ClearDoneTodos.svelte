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
</script>


<button on:click={handleClearDoneTodos}>Clear done todos</button>