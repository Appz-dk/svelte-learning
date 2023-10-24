<script lang="ts">
  import { todos, type TodoType } from "../stores/todoStore";
  import { receive, send } from "../transition";

  export let todo: TodoType
</script>

<li 
in:receive={{ key: todo.uid }}
out:send={{ key: todo.uid }}
>
  <label class="todo-container">
    <input type="checkbox" checked={todo.done} on:change={() => todos.checkTodo(todo, !todo.done)}/>
    <span>{todo.text}</span>
  </label>
</li>

<style>
  li {
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    border-radius: 6px;
    user-select: none;
    background: hsl(0, 0%, 18%);
    filter: drop-shadow(2px 3px 6px rgba(0, 0, 0, 0.1));
    margin-bottom: .5rem;
  }

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
</style>