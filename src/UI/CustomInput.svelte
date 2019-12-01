<script>
  export let value;
  export let controltype = 'input';
  export let label;
  export let id;
  export let rows = '1';
  export let type = 'text';
  export let required = false;
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
           on:input required="{required}">
    {:else}
    <textarea class="textarea" { rows } { id }
              { value } on:input required="{required}"/>
    {/if}
	</div>
</div>
