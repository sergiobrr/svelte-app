<script>
  import { createEventDispatcher } from "svelte";
  export let title = 'Modal';
  export let content;
  export let okButton = 'Save';
  export let cancelButton = 'Cancel';
  export let show = false;

  const dispatch = createEventDispatcher();

  function handleResult(result) {
    dispatch('result', result);
  }
</script>
<div class="modal" class:is-active={show}>
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <slot name="modal-header">
        <p class="modal-card-title">{title}</p>
        <button class="delete" aria-label="close"></button>
      </slot>
    </header>
    <section class="modal-card-body">
      <slot name="modal-body">
        <p>{content}</p>
      </slot>
    </section>
    <footer class="modal-card-foot">
      <slot name="modal-footer">
        <button class="button is-success"
                on:click={() => handleResult(true)}
                aria-label="close">
          {okButton}
        </button>
        <button class="button"
                on:click={() => handleResult(false)}
                aria-label="close">
          {cancelButton}
        </button>
      </slot>
    </footer>
  </div>
</div>

