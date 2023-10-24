<script lang="ts">
  import { todos } from "../stores/todoStore"

  import Todo from "./Todo.svelte";
  export let isDone: boolean;
</script>

<ul class="todos">
  {#each $todos.filter(todo => todo.done === isDone) as {uid, text, done} (uid)}
  <Todo text={text} done={done}/>
  {/each}
</ul>

<style>
  .todos {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>