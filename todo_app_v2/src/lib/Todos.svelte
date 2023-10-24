<script lang="ts">
  import { flip } from "svelte/animate";
  import { todos } from "../stores/todoStore"

  import Todo from "./Todo.svelte";
  import { receive, send } from "../transition";
  export let isDone: boolean;
</script>

<ul class="todos">
  {#each $todos.filter(todo => todo.done === isDone) as todo (todo.uid)}
  <li 
  in:receive={{ key: todo.uid }}
  out:send={{ key: todo.uid }}
  animate:flip={{duration: 200}}
  >
  <Todo todo={todo}/>
  </li>
  {/each}
</ul>

<style>
  .todos {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    border-radius: 6px;
    user-select: none;
    background: hsl(0, 0%, 18%);
    filter: drop-shadow(2px 3px 6px rgba(0, 0, 0, 0.1));
    margin-bottom: .5rem;
  }
</style>