<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function confirm() {
    dispatch('confirmModal', []);
  }

  function close() {
    dispatch('closeModal');
  }
</script>

<div class="modal">
  <div class="modal-content">
    <!-- Could dynamicly add the text to reuse the modal -->
    <p>Are you sure you want to clear all todos?</p>
    <button on:click={confirm}>Yes</button>
    <button on:click={close}>No</button>
  </div>
</div>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    width: 300px;
    padding: 20px;
    background: #424242;
    border-radius: 4px;
    color: white;
  }
</style>
