<script>
  export let value;
  export let controltype;
  export let label;
  export let id;
  export let rows;
  export let type;
</script>
<style>
  .field {
    max-width: 90%;
    width: 40rem;
    padding: 16px;
  }
</style>
<div class="field">
  <label class="label" for="{ id }">
    { label }
  </label>
  <div class="control">
    {#if controltype === 'input'}
    <input class="input" { type }
           placeholder="Insert { value }" { id }
           { value }
           on:input >
    {:else}
    <textarea class="textarea" { rows } { id }
              { value } on:input />
    {/if}
	</div>
</div>
