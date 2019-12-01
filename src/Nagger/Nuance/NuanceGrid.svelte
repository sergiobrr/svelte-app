<script>
  import { createEventDispatcher } from 'svelte';
  import NuanceItem from './NuanceItem.svelte';
  import CustomModal from '../../UI/CustomModal.svelte';
  export let nuances;
  const dispatch = createEventDispatcher();
  let show = false;
  let current = null;

  function deleteNuance(index) {
    current = index;
    show = true;
  }

  function handleResult(event) {
    if(event.detail && current !== null) {
      dispatch('delete-nuance', {index: current});
    }
    current = null;
    show = false;
  }
</script>

<style></style>

<section id="nuance-list">
  {#each nuances as item, index}
    <button class="button is-large"
            on:click={() => deleteNuance(index)}>
      Cancella Nuance
    </button>
    <NuanceItem {item}>
    </NuanceItem>
  {/each}
  <CustomModal {show} title="Cancella una Nuance"
               content="Sei sicuro di cancellare la Nuance?"
               okButton="Cancella"
               cancelButton="Annulla"
               on:result={handleResult}>
  </CustomModal>
</section>
