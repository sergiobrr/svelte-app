<script>
  import { createEventDispatcher } from "svelte";
  export let tagContent;
  export let index;
  let dispatch = createEventDispatcher();

  function propagateDeletion(index) {
    dispatch('deletetag', index);
  }
</script>

<span class="tag is-light">{tagContent}</span>
<a class="tag is-delete is-link"
    on:click={() => propagateDeletion(index)}></a>
