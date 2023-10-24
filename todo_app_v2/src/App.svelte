<script lang="ts">
  import Todo from "./lib/Todo.svelte";
  import Todos from "./lib/Todos.svelte";
  import { todos } from "./stores/todoStore";

  let todoText: string

  const handleAddTodo = () => {
    if (!todoText) return
    todos.addTodo(todoText)
    todoText = ""
  }

  const handleKeydown = (e: KeyboardEvent) => {
    const isValid = e.code === "Enter" || e.code === "NumpadEnter"
    if (!isValid || !todoText) return
    handleAddTodo()
  }
</script>

<main>
  <!-- Add todo -->
  <div class="add-todo">
    <input bind:value={todoText} placeholder="Add a new Todo" on:keydown={handleKeydown}/>
    <button on:click={handleAddTodo}>Add Todo</button>
  </div>
  <!-- Not done todos -->
  <div>
    <h2>Todos</h2>
    <Todos isDone={false} />
  </div>

  <!-- Add done todos -->
  <div>
    <h2>Done</h2>
    <Todos isDone={true} />
  </div>

</main>

<style>

  .add-todo {
    grid-column: 1/3;
    display: flex;
    gap: 8px;

    & input {
      flex-grow: 1;
      padding-inline: .5em
    }
  }


  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
    max-width: 500px;
    text-align: left;

    & h2 {
      margin-block: .5em
    }
  }
</style>
