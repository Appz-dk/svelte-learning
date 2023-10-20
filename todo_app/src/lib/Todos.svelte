<script lang="ts" context="module">
  // Type definitions in module context
  // export type TodoType = { id: string, text: string; done: boolean };
  // export type TodosType = TodoType[];
</script>

<script lang="ts">
  import AddTodo from "./AddTodo.svelte";
  import ClearTodos from "./ClearTodos.svelte";
  import ConfirmModal from "./ConfirmModal.svelte";
  import { todosStore, type TodosType } from "../stores/todos";

  import Todo from "./todo.svelte"

  // Variables
  let showModal = false

  const handleShowModal = (event: CustomEvent<boolean>) => {
    showModal = event.detail
  }

  // Now using svelte store
  const updateTodos = (e: CustomEvent<TodosType>) => {
    todosStore.updateTodos(e.detail)
    if (showModal) showModal = false
  }

</script>


<AddTodo on:addTodo={e => todosStore.addTodo(e.detail)}/>

{#if !$todosStore.length}
  <p>No todos added...</p>
{:else}
  <ul class="todos-list">
    {#each $todosStore as todo (todo.id)}
    <Todo {todo} />
    {/each}
  </ul>
{/if}

<ClearTodos on:showConfirmModal={handleShowModal}/>

{#if showModal}
<ConfirmModal on:closeModal={() => showModal = false} on:confirmModal={updateTodos}/>
{/if}


<style>
  .todos-list {
    list-style: none;
    text-align: left;
    padding: 0
  }
</style>