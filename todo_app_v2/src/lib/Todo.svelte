<script lang="ts">
  import { todos, type TodoType } from "../stores/todoStore";

  export let todo: TodoType

  $:done = todo.done
</script>

<label class:done class="todo-container">
  <input type="checkbox" checked={todo.done} on:change={() => todos.checkTodo(todo, !todo.done)}/>
  <span>{todo.text}</span>
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

  .done {
    opacity: .5;

    & span {
      text-decoration: line-through;
    }
  }
</style>