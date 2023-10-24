<script lang="ts">
  export let text: string
  export let done: boolean
</script>

<li>
<label class="todo-container">
  <input type="checkbox" checked={done}/>
    <span>{text}</span>
  </label>
</li>

<style>
  li {
    padding: .5rem 1rem;
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