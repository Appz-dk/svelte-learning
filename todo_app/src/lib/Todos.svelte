<script lang="ts" context="module">
  // Type definitions in module context
  export type TodoType = { id: string, text: string; done: boolean };
  export type TodosType = TodoType[];
</script>

<script lang="ts">
  import AddTodo from "./AddTodo.svelte";
  import ClearTodos from "./ClearTodos.svelte";
  import ConfirmModal from "./ConfirmModal.svelte";

  import Todo from "./todo.svelte"
  export let todos: TodosType = [ { id: "1", text: "walk the dog", done: false }, { id: "2", text: "take out trash", done: true } ]
  let showModal = false

  // Listens to custom event of AddTodo and updates the todos acordingly
  const handleNewTodo = (event: CustomEvent<TodoType>) => {
    todos = [...todos, event.detail];
  }
  const updateTodos = (event: CustomEvent<TodosType>) => {
    todos = event.detail
    // TODO: Should probably create a functions for clear all instead.
    if (showModal) showModal = false
  } 

  const handleShowModal = (event: CustomEvent<boolean>) => {
    showModal = event.detail
  }

</script>


<AddTodo {todos} on:addTodo={handleNewTodo}/>

{#if !todos.length}
  <p>No todos added...</p>
{:else}
  <ul class="todos-list">
    {#each todos as todo (todo.id)}
    <Todo {todo} {todos} on:deleteTodo={updateTodos}/>
    {/each}
  </ul>
{/if}

<ClearTodos {todos} on:clearDoneTodos={updateTodos} on:showConfirmModal={handleShowModal}/>

{#if showModal}
<ConfirmModal on:closeModal={() => showModal = false} on:confirmModal={updateTodos}/>
{/if}


<style>
  .todos-list {
    list-style: none;
    text-align: left;
    padding: 0
  }

  /* .todo-container {
    display: flex;
    gap: 4px;
  } */
</style>