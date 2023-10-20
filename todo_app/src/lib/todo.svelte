<script lang="ts">
  import { todosStore, type TodoType } from '../stores/todos';
  import FaRegTrashAlt from 'svelte-icons/fa/FaRegTrashAlt.svelte'

  export let todo: TodoType

  const onDeleteTodo = (id: string) => {
    const updatedTodos = $todosStore.filter(todo => todo.id !== id)
    todosStore.updateTodos(updatedTodos)
  }

  const handleToggleTodo = (id: string) => {
    const updatedTodos = $todosStore.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo)    
    todosStore.updateTodos(updatedTodos)
  }
</script>

<div class="todo-container">
  <label class:checked={todo.done}>
    <!-- Better to not bind directly to a store value and instead update the done state in the handleToggleTodo -->
    <!-- <input type="checkbox" bind:checked={todo.done} on:change={handleCheckTodo}/> -->  
    <input type="checkbox" checked={todo.done} on:change={() => handleToggleTodo(todo.id)}/>
    {todo.text}
  </label>
  <button class="icon" on:click={() => onDeleteTodo(todo.id)}>
    <FaRegTrashAlt />
  </button>
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
    all:unset;
    display: grid;
    place-items: center;
    width: 20px;
    aspect-ratio: 1;
    cursor: pointer;
    height: fit-content;
  }

  .icon:focus-visible {
    outline: 2px solid white;
    outline-offset: 1px;
    border-radius: 4px;
  }

  .icon:hover {
    color: rgb(248, 72, 72)
  }
</style>