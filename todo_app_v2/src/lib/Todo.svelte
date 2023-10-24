<script lang="ts">
  import { todos, type TodoType } from "../stores/todoStore";

  export let todo: TodoType

  $:done = todo.done
</script>

<label class:done class="todo-container">
  <input type="checkbox" checked={todo.done} on:change={() => todos.checkTodo(todo, !todo.done)}/>
  <span>{todo.text}</span>
  <button class="remove-todo" on:click={() => todos.removeTodo(todo)} aria-label="Remove"/>
</label>

<style>
  

  .todo-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    width: 100%;
    cursor: pointer;
  }

  .todo-container input {
    width: 15px;
    aspect-ratio: 1;
    cursor: pointer;
  }

  .remove-todo {
    all: unset;
    width: 15px;
    min-width: 15px;
    aspect-ratio: 1;
    background-image: url("../assets/remove.svg");
    background-repeat: no-repeat;
    margin-left: auto;
  }

  span {
    margin-right: .5em
  }

  .done {
    opacity: .5;

    & span {
      text-decoration: line-through;
    }
  }
</style>