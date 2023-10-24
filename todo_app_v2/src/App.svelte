<script lang="ts">
  import Todo from "./lib/Todo.svelte";
  import Todos from "./lib/Todos.svelte";

</script>

<main>
  <Todos>
    <Todo slot="todo"/>
  </Todos>
</main>

<style>
</style>
