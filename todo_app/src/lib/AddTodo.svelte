<script lang="ts">
  import { todosStore } from "../stores/todos";

  // Variables needed
  let todoText = ""

  // Add todo to store
  const handleAddTodo = () => {
    if (!todoText) return
    todosStore.addTodo(todoText)
    // Clear input
    todoText = ""
  }

  // allow user to add with Enter key
  const inputKeydown = (e: KeyboardEvent) => {
    const isEnterKey = e.code === "Enter" || e.code === "NumpadEnter"
    if (isEnterKey && todoText) {
      handleAddTodo()
    }
  }
</script>


<div class="add-todo">
  <input bind:value={todoText} on:keydown={inputKeydown}/>
  <button on:click={handleAddTodo}>Add Todo</button>
</div>

<style>

  .add-todo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .add-todo input {
    padding: .25rem .5rem;
  }

</style>