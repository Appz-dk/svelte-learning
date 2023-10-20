<script lang="ts" context="module">
  // Type definitions in module context
  export type TodoType = { id: string, text: string; done: boolean };
  export type TodosType = TodoType[];
</script>

<script lang="ts">
  import AddTodo from "./AddTodo.svelte";
  import ClearDoneTodos from "./ClearDoneTodos.svelte";

  import Todo from "./todo.svelte"
  export let todos: TodosType = [ { id: "1", text: "walk the dog", done: false }, { id: "2", text: "take out trash", done: true } ]

  // Listens to custom event of AddTodo and updates the todos acordingly
  const handleNewTodo = (event: CustomEvent<TodoType>) => {
    todos = [...todos, event.detail];
  }
  
  const handleRemoveDoneTodos = (event: CustomEvent<TodosType>) => {
    todos = event.detail
  }
</script>


<AddTodo {todos} on:addTodo={handleNewTodo}/>

<ul class="todos-list">
  {#each todos as todo (todo.id)}
  <Todo {todo} />
  {/each}
</ul>

<ClearDoneTodos {todos} on:clearDoneTodos={handleRemoveDoneTodos}/>


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